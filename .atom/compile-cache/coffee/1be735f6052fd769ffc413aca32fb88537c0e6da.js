(function() {
  var $, $$, $$$, MessageView, View, ref,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  ref = require("atom-space-pen-views"), $ = ref.$, $$ = ref.$$, $$$ = ref.$$$, View = ref.View;

  module.exports = MessageView = (function(superClass) {
    extend(MessageView, superClass);

    MessageView.prototype.messages = [];

    MessageView.content = function() {
      return this.div({
        "class": 'atom-beautify message-panel'
      }, (function(_this) {
        return function() {
          return _this.div({
            "class": 'overlay from-top'
          }, function() {
            return _this.div({
              "class": "tool-panel panel-bottom"
            }, function() {
              return _this.div({
                "class": "inset-panel"
              }, function() {
                _this.div({
                  "class": "panel-heading"
                }, function() {
                  _this.div({
                    "class": 'btn-toolbar pull-right'
                  }, function() {
                    return _this.button({
                      "class": 'btn',
                      click: 'clearMessages'
                    }, 'Clear');
                  });
                  return _this.span({
                    "class": '',
                    outlet: 'title'
                  }, 'Atom Beautify Message');
                });
                return _this.div({
                  "class": "panel-body padded select-list",
                  outlet: 'body'
                }, function() {
                  return _this.ol({
                    "class": 'list-group',
                    outlet: 'messageItems'
                  }, function() {
                    _this.li({
                      "class": 'two-lines'
                    }, function() {
                      _this.div({
                        "class": 'status status-removed icon icon-diff-added'
                      }, '');
                      _this.div({
                        "class": 'primary-line icon icon-alert'
                      }, 'This is the title');
                      return _this.div({
                        "class": 'secondary-line no-icon'
                      }, 'Secondary line');
                    });
                    _this.li({
                      "class": 'two-lines'
                    }, function() {
                      _this.div({
                        "class": 'status status-removed icon icon-diff-added'
                      }, '');
                      _this.div({
                        "class": 'primary-line icon icon-alert'
                      }, 'This is the title Currently there is no way to display a message to the user, such as errors or warnings or deprecation notices (see #40). Let\'s put a little overlay on the top for displaying such information.');
                      return _this.div({
                        "class": 'secondary-line no-icon'
                      }, 'This is the title Currently there is no way to display a message to the user, such as errors or warnings or deprecation notices (see #40). Let\'s put a little overlay on the top for displaying such information.');
                    });
                    _this.li({
                      "class": 'two-lines'
                    }, function() {
                      _this.div({
                        "class": 'status status-removed icon icon-diff-added'
                      }, '');
                      _this.div({
                        "class": 'primary-line icon icon-alert'
                      }, 'test');
                      return _this.div({
                        "class": 'secondary-line no-icon'
                      }, 'Secondary line');
                    });
                    _this.li({
                      "class": 'two-lines'
                    }, function() {
                      _this.div({
                        "class": 'status status-removed icon icon-diff-added'
                      }, '');
                      _this.div({
                        "class": 'primary-line icon icon-alert'
                      }, 'This is the title');
                      return _this.div({
                        "class": 'secondary-line no-icon'
                      }, 'Secondary line');
                    });
                    _this.li({
                      "class": 'two-lines'
                    }, function() {
                      _this.div({
                        "class": 'status status-removed icon icon-diff-added'
                      }, '');
                      _this.div({
                        "class": 'primary-line icon icon-alert'
                      }, 'This is the title');
                      return _this.div({
                        "class": 'secondary-line no-icon'
                      }, 'Secondary line');
                    });
                    return _this.li({
                      "class": 'two-lines'
                    }, function() {
                      _this.div({
                        "class": 'status status-added icon icon-diff-added'
                      }, '');
                      _this.div({
                        "class": 'primary-line icon icon-file-text'
                      }, 'Primary line');
                      return _this.div({
                        "class": 'secondary-line no-icon'
                      }, 'Secondary line');
                    });
                  });
                });
              });
            });
          });
        };
      })(this));
    };

    function MessageView() {
      this.refresh = bind(this.refresh, this);
      this.show = bind(this.show, this);
      this.close = bind(this.close, this);
      this.clearMessages = bind(this.clearMessages, this);
      this.addMessage = bind(this.addMessage, this);
      MessageView.__super__.constructor.apply(this, arguments);
    }

    MessageView.prototype.destroy = function() {};

    MessageView.prototype.addMessage = function(message) {
      this.messages.push(message);
      return this.refresh();
    };

    MessageView.prototype.clearMessages = function() {
      this.messages = [];
      return this.refresh();
    };

    MessageView.prototype.close = function(event, element) {
      return this.detach();
    };

    MessageView.prototype.show = function() {
      if (!this.hasParent()) {
        return atom.workspaceView.appendToTop(this);
      }
    };

    MessageView.prototype.refresh = function() {
      if (this.messages.length === 0) {
        return this.close();
      } else {
        return this.show();
      }
    };

    return MessageView;

  })(View);

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiL1VzZXJzL3BvbHlha292ZGEvLmF0b20vcGFja2FnZXMvYXRvbS1iZWF1dGlmeS9zcmMvdmlld3MvbWVzc2FnZS12aWV3LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQUEsa0NBQUE7SUFBQTs7OztFQUFBLE1BQXFCLE9BQUEsQ0FBUSxzQkFBUixDQUFyQixFQUFDLFNBQUQsRUFBSSxXQUFKLEVBQVEsYUFBUixFQUFhOztFQUViLE1BQU0sQ0FBQyxPQUFQLEdBQ007OzswQkFDSixRQUFBLEdBQVU7O0lBQ1YsV0FBQyxDQUFBLE9BQUQsR0FBVSxTQUFBO2FBQ1IsSUFBQyxDQUFBLEdBQUQsQ0FDRTtRQUFBLENBQUEsS0FBQSxDQUFBLEVBQU8sNkJBQVA7T0FERixFQUN3QyxDQUFBLFNBQUEsS0FBQTtlQUFBLFNBQUE7aUJBQ3BDLEtBQUMsQ0FBQSxHQUFELENBQ0U7WUFBQSxDQUFBLEtBQUEsQ0FBQSxFQUFPLGtCQUFQO1dBREYsRUFDNkIsU0FBQTttQkFDekIsS0FBQyxDQUFBLEdBQUQsQ0FBSztjQUFBLENBQUEsS0FBQSxDQUFBLEVBQU8seUJBQVA7YUFBTCxFQUF1QyxTQUFBO3FCQUNyQyxLQUFDLENBQUEsR0FBRCxDQUFLO2dCQUFBLENBQUEsS0FBQSxDQUFBLEVBQU8sYUFBUDtlQUFMLEVBQTJCLFNBQUE7Z0JBQ3pCLEtBQUMsQ0FBQSxHQUFELENBQUs7a0JBQUEsQ0FBQSxLQUFBLENBQUEsRUFBTyxlQUFQO2lCQUFMLEVBQTZCLFNBQUE7a0JBQzNCLEtBQUMsQ0FBQSxHQUFELENBQUs7b0JBQUEsQ0FBQSxLQUFBLENBQUEsRUFBTyx3QkFBUDttQkFBTCxFQUFzQyxTQUFBOzJCQUNwQyxLQUFDLENBQUEsTUFBRCxDQUNFO3NCQUFBLENBQUEsS0FBQSxDQUFBLEVBQU8sS0FBUDtzQkFDQSxLQUFBLEVBQU8sZUFEUDtxQkFERixFQUdFLE9BSEY7a0JBRG9DLENBQXRDO3lC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QixDQUErQixJQUEvQixFQURGOztJQURJOzswQkFJTixPQUFBLEdBQVMsU0FBQTtNQUVQLElBQUcsSUFBQyxDQUFBLFFBQVEsQ0FBQyxNQUFWLEtBQW9CLENBQXZCO2VBQ0UsSUFBQyxDQUFBLEtBQUQsQ0FBQSxFQURGO09BQUEsTUFBQTtlQUdFLElBQUMsQ0FBQSxJQUFELENBQUEsRUFIRjs7SUFGTzs7OztLQXhFZTtBQUgxQiIsInNvdXJjZXNDb250ZW50IjpbInskLCAkJCwgJCQkLCBWaWV3fSA9IHJlcXVpcmUgXCJhdG9tLXNwYWNlLXBlbi12aWV3c1wiXG5cbm1vZHVsZS5leHBvcnRzID1cbmNsYXNzIE1lc3NhZ2VWaWV3IGV4dGVuZHMgVmlld1xuICBtZXNzYWdlczogW11cbiAgQGNvbnRlbnQ6IC0+XG4gICAgQGRpdlxuICAgICAgY2xhc3M6ICdhdG9tLWJlYXV0aWZ5IG1lc3NhZ2UtcGFuZWwnLCA9PlxuICAgICAgICBAZGl2XG4gICAgICAgICAgY2xhc3M6ICdvdmVybGF5IGZyb20tdG9wJywgPT5cbiAgICAgICAgICAgIEBkaXYgY2xhc3M6IFwidG9vbC1wYW5lbCBwYW5lbC1ib3R0b21cIiwgPT5cbiAgICAgICAgICAgICAgQGRpdiBjbGFzczogXCJpbnNldC1wYW5lbFwiLCA9PlxuICAgICAgICAgICAgICAgIEBkaXYgY2xhc3M6IFwicGFuZWwtaGVhZGluZ1wiLCA9PlxuICAgICAgICAgICAgICAgICAgQGRpdiBjbGFzczogJ2J0bi10b29sYmFyIHB1bGwtcmlnaHQnLCA9PlxuICAgICAgICAgICAgICAgICAgICBAYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdidG4nXG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2s6ICdjbGVhck1lc3NhZ2VzJ1xuICAgICAgICAgICAgICAgICAgICAgICdDbGVhcidcbiAgICAgICAgICAgICAgICAgIEBzcGFuXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiAnJ1xuICAgICAgICAgICAgICAgICAgICBvdXRsZXQ6ICd0aXRsZSdcbiAgICAgICAgICAgICAgICAgICAgJ0F0b20gQmVhdXRpZnkgTWVzc2FnZSdcbiAgICAgICAgICAgICAgICBAZGl2XG4gICAgICAgICAgICAgICAgICBjbGFzczogXCJwYW5lbC1ib2R5IHBhZGRlZCBzZWxlY3QtbGlzdFwiXG4gICAgICAgICAgICAgICAgICBvdXRsZXQ6ICdib2R5J1xuICAgICAgICAgICAgICAgICAgPT5cbiAgICAgICAgICAgICAgICAgICAgQG9sXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M6ICdsaXN0LWdyb3VwJyxcbiAgICAgICAgICAgICAgICAgICAgICBvdXRsZXQ6ICdtZXNzYWdlSXRlbXMnXG4gICAgICAgICAgICAgICAgICAgICAgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIEBsaSBjbGFzczogJ3R3by1saW5lcycsID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIEBkaXYgY2xhc3M6ICdzdGF0dXMgc3RhdHVzLXJlbW92ZWQgaWNvbiBpY29uLWRpZmYtYWRkZWQnLCAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBAZGl2IGNsYXNzOiAncHJpbWFyeS1saW5lIGljb24gaWNvbi1hbGVydCcsICdUaGlzIGlzIHRoZSB0aXRsZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQGRpdiBjbGFzczogJ3NlY29uZGFyeS1saW5lIG5vLWljb24nLCAnU2Vjb25kYXJ5IGxpbmUnXG4gICAgICAgICAgICAgICAgICAgICAgICBAbGkgY2xhc3M6ICd0d28tbGluZXMnLCA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICBAZGl2IGNsYXNzOiAnc3RhdHVzIHN0YXR1cy1yZW1vdmVkIGljb24gaWNvbi1kaWZmLWFkZGVkJywgJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQGRpdiBjbGFzczogJ3ByaW1hcnktbGluZSBpY29uIGljb24tYWxlcnQnLCAnVGhpcyBpcyB0aGUgdGl0bGUgQ3VycmVudGx5IHRoZXJlIGlzIG5vIHdheSB0byBkaXNwbGF5IGEgbWVzc2FnZSB0byB0aGUgdXNlciwgc3VjaCBhcyBlcnJvcnMgb3Igd2FybmluZ3Mgb3IgZGVwcmVjYXRpb24gbm90aWNlcyAoc2VlICM0MCkuIExldFxcJ3MgcHV0IGEgbGl0dGxlIG92ZXJsYXkgb24gdGhlIHRvcCBmb3IgZGlzcGxheWluZyBzdWNoIGluZm9ybWF0aW9uLidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQGRpdiBjbGFzczogJ3NlY29uZGFyeS1saW5lIG5vLWljb24nLCAnVGhpcyBpcyB0aGUgdGl0bGUgQ3VycmVudGx5IHRoZXJlIGlzIG5vIHdheSB0byBkaXNwbGF5IGEgbWVzc2FnZSB0byB0aGUgdXNlciwgc3VjaCBhcyBlcnJvcnMgb3Igd2FybmluZ3Mgb3IgZGVwcmVjYXRpb24gbm90aWNlcyAoc2VlICM0MCkuIExldFxcJ3MgcHV0IGEgbGl0dGxlIG92ZXJsYXkgb24gdGhlIHRvcCBmb3IgZGlzcGxheWluZyBzdWNoIGluZm9ybWF0aW9uLidcbiAgICAgICAgICAgICAgICAgICAgICAgIEBsaSBjbGFzczogJ3R3by1saW5lcycsID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIEBkaXYgY2xhc3M6ICdzdGF0dXMgc3RhdHVzLXJlbW92ZWQgaWNvbiBpY29uLWRpZmYtYWRkZWQnLCAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBAZGl2IGNsYXNzOiAncHJpbWFyeS1saW5lIGljb24gaWNvbi1hbGVydCcsICd0ZXN0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICBAZGl2IGNsYXNzOiAnc2Vjb25kYXJ5LWxpbmUgbm8taWNvbicsICdTZWNvbmRhcnkgbGluZSdcbiAgICAgICAgICAgICAgICAgICAgICAgIEBsaSBjbGFzczogJ3R3by1saW5lcycsID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIEBkaXYgY2xhc3M6ICdzdGF0dXMgc3RhdHVzLXJlbW92ZWQgaWNvbiBpY29uLWRpZmYtYWRkZWQnLCAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBAZGl2IGNsYXNzOiAncHJpbWFyeS1saW5lIGljb24gaWNvbi1hbGVydCcsICdUaGlzIGlzIHRoZSB0aXRsZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQGRpdiBjbGFzczogJ3NlY29uZGFyeS1saW5lIG5vLWljb24nLCAnU2Vjb25kYXJ5IGxpbmUnXG4gICAgICAgICAgICAgICAgICAgICAgICBAbGkgY2xhc3M6ICd0d28tbGluZXMnLCA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICBAZGl2IGNsYXNzOiAnc3RhdHVzIHN0YXR1cy1yZW1vdmVkIGljb24gaWNvbi1kaWZmLWFkZGVkJywgJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQGRpdiBjbGFzczogJ3ByaW1hcnktbGluZSBpY29uIGljb24tYWxlcnQnLCAnVGhpcyBpcyB0aGUgdGl0bGUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEBkaXYgY2xhc3M6ICdzZWNvbmRhcnktbGluZSBuby1pY29uJywgJ1NlY29uZGFyeSBsaW5lJ1xuICAgICAgICAgICAgICAgICAgICAgICAgQGxpIGNsYXNzOiAndHdvLWxpbmVzJywgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgQGRpdiBjbGFzczogJ3N0YXR1cyBzdGF0dXMtYWRkZWQgaWNvbiBpY29uLWRpZmYtYWRkZWQnLCAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBAZGl2IGNsYXNzOiAncHJpbWFyeS1saW5lIGljb24gaWNvbi1maWxlLXRleHQnLCAnUHJpbWFyeSBsaW5lJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBAZGl2IGNsYXNzOiAnc2Vjb25kYXJ5LWxpbmUgbm8taWNvbicsICdTZWNvbmRhcnkgbGluZSdcblxuICBjb25zdHJ1Y3RvcjogLT5cbiAgICBzdXBlclxuXG4gIGRlc3Ryb3k6IC0+XG5cbiAgYWRkTWVzc2FnZTogKG1lc3NhZ2UpID0+XG4gICAgQG1lc3NhZ2VzLnB1c2gobWVzc2FnZSlcbiAgICBAcmVmcmVzaCgpXG5cbiAgY2xlYXJNZXNzYWdlczogPT5cbiAgICBAbWVzc2FnZXMgPSBbXVxuICAgIEByZWZyZXNoKClcblxuICBjbG9zZTogKGV2ZW50LCBlbGVtZW50KSA9PlxuICAgIEBkZXRhY2goKVxuXG4gIHNob3c6ID0+XG4gICAgaWYgbm90IEAuaGFzUGFyZW50KClcbiAgICAgIGF0b20ud29ya3NwYWNlVmlldy5hcHBlbmRUb1RvcCBAXG5cbiAgcmVmcmVzaDogPT5cbiAgICAjIElmIHRoZSBtZXNzYWdlcyBsaXN0IGlzIGVtcHR5LCB2aWV3IHNob3VsZCBiZSBjbG9zZWQuXG4gICAgaWYgQG1lc3NhZ2VzLmxlbmd0aCBpcyAwXG4gICAgICBAY2xvc2UoKVxuICAgIGVsc2VcbiAgICAgIEBzaG93KClcbiJdfQ==
