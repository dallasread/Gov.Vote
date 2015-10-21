function serialize($form) {
  var json = {};
  $.map($form.serializeArray(), function(n, i) {
    var _ = n.name.indexOf('[');
    if (_ > -1) {
        var len;
      var o = json;
      var _name = n.name.replace(/\]/gi, '').split('[');
      for (i=0, len=_name.length; i<len; i++) {
        if (i == len-1) {
          if (o[_name[i]]) {
            if (typeof o[_name[i]] == 'string') {
              o[_name[i]] = [o[_name[i]]];
            }
            o[_name[i]].push(n.value);
          }
          else o[_name[i]] = n.value || '';
        }
        else o = o[_name[i]] = o[_name[i]] || {};
      }
    }
    else {
      if (json[n.name] !== undefined) {
        if (!json[n.name].push) {
          json[n.name] = [json[n.name]];
        }
        json[n.name].push(n.value || '');
      }
      else json[n.name] = n.value || '';
    }
  });
  return json;
}

module.exports = {
    interactions: {
        submit: {
            event: 'submit',
            target: 'form',
            listener: function listener(e, $el) {
                var _ = this;

                if (_.validateForm($el)) {
                    _.formSubmitHandler($el.attr('action'), serialize($el));
                }

                return false;
            }
        },
        validateField: {
            event: 'keyup',
            target: '[validate], [match]',
            listener: function listener(e, $el) {
                var _ = this,
                    $form = $el.closest('form'),
                    name = $el.attr('name');

                _.validateField($el);

                if (!name) return;

                $form.find('[match="' + name + '"]').each(function() {
                    _.validateField($(this));
                });
            }
        },
        password: {
            event: 'keyup',
            target: '.has-password-strength',
            listener: function listener(e, $el) {
                var _ = this;
                var $div = $el.closest('.field').find('.password-strength');
                _.calcPasswordStrength($el.val(), $div);
            }
        }
    },

    class: {
        registerForm: function registerForm(name, action) {
            var _ = this;

            _.proto._forms[name] = action;
        }
    },

    proto: {
        _forms: {},
        formSubmitHandler: function formSubmitHandler(name, data) {
            var _ = this,
                form = _._forms[name];

            if (typeof form === 'function') {
                form.call(_, data);
            } else {
                console.warn('No action defined: ', name);
            }
        },

        calcPasswordStrength: function calcPasswordStrength(val, $div) {
            var count = 0,
                colors = ['red', 'yellow', 'blue', 'green'];

            /[a-z]/.test(val) && count++;
            /[A-Z]/.test(val) && count++;
            /[0-9]/.test(val) && count++;
            /[~!@#$%^&*()_+]/.test(val) && count++;

            if (val.length < 6 && count === 4) count = 3;

            $div.stop().animate({
                width: (count / 4 * 100) + '%'
            }, 800);

            $div.attr('class', 'password-strength ' + colors[count - 1] + '-bg');
        },
        validateField: function validateField($el) {
            var _ = this,
                val = $el.val(),
                $form = $el.closest('form'),
                $field = $el.closest('.field, .validate-field'),
                validator = $el.attr('validate'),
                match = $el.attr('match'),
                doesMatch = $form.find('[name="' + match + '"]').val() === val,
                title = _.validatorErrors[validator];

            if (!val.length) {
                $field.find('.validate-icon').html('');
            } else if (
                (match && doesMatch) ||
                (validator && _.validators[validator](val))
            ) {
                $field.find('.validate-icon').html('<i class="fa fa-check green"></i>');
                return true;
            } else {
                $field.find('.validate-icon').html('<i class="fa fa-times red" ' + (title ? 'title="' + title + '"' : '') + '></i>');
            }

            return false;
        },
        validateForm: function validateForm($form) {
            var _ = this,
                valid = true;

            $form.find('[match], [validate]').each(function() {
                if (!_.validateField($(this))) {
                    valid = false;
                }
            });

            return valid;
        },
        validators: {
            email: function email(value) {
                return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(value);
            },
            string: function string(value) {
                return true;
            },
            password: function password(value) {
                return value.length >= 6;
            }
        },
        validatorErrors: {
            email: 'This is not a valid email.',
            string: 'This is not valid data.',
            password: 'This is not a valid password.',
        }
    }
};
