(function() {
  describe("atom wrap in tag", function() {
    var activationPromise, packageLoaded, ref, workspaceElement;
    ref = [], workspaceElement = ref[0], activationPromise = ref[1];
    packageLoaded = function(callback) {
      atom.commands.dispatch(workspaceElement, 'wrap-in-tag:wrap');
      waitsForPromise(function() {
        return activationPromise;
      });
      return runs(callback);
    };
    beforeEach(function() {
      activationPromise = atom.packages.activatePackage('atom-wrap-in-tag');
      workspaceElement = atom.views.getView(atom.workspace);
      jasmine.attachToDOM(workspaceElement);
      return waitsForPromise(function() {
        return atom.workspace.open('./test.html');
      });
    });
    it('Should check if "atom-wrap-in-tag" package is loaded', function() {
      return packageLoaded(function() {
        return expect(atom.packages.loadedPackages["atom-wrap-in-tag"]).toBeDefined();
      });
    });
    describe("When file is loaded", function() {
      return it("should have test.html opened in an editor", function() {
        return expect(atom.workspace.getActiveTextEditor().getText().trim()).toBe("Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
      });
    });
    return describe("When file have selection", function() {
      return it("Should have 'ipsum dolor' selected", function() {
        atom.workspace.getActiveTextEditor().setSelectedBufferRange([[0, 6], [0, 17]]);
        atom.commands.dispatch(atom.views.getView(atom.workspace), 'wrap-in-tag:wrap');
        return expect(atom.workspace.getActiveTextEditor().getText().trim()).toBe("Lorem <p>ipsum dolor</p> sit amet, consectetur adipiscing elit.");
      });
    });
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiL1VzZXJzL3BvbHlha292ZGEvLmF0b20vcGFja2FnZXMvYXRvbS13cmFwLWluLXRhZy9zcGVjL3dyYXAtaW4tdGFnLXNwZWMuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsUUFBQSxDQUFTLGtCQUFULEVBQTZCLFNBQUE7QUFFM0IsUUFBQTtJQUFBLE1BQXdDLEVBQXhDLEVBQUMseUJBQUQsRUFBbUI7SUFFbkIsYUFBQSxHQUFnQixTQUFDLFFBQUQ7TUFDZCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQWQsQ0FBdUIsZ0JBQXZCLEVBQXlDLGtCQUF6QztNQUNBLGVBQUEsQ0FBZ0IsU0FBQTtlQUFHO01BQUgsQ0FBaEI7YUFDQSxJQUFBLENBQUssUUFBTDtJQUhjO0lBS2hCLFVBQUEsQ0FBVyxTQUFBO01BRVQsaUJBQUEsR0FBb0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFkLENBQThCLGtCQUE5QjtNQUNwQixnQkFBQSxHQUFtQixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQVgsQ0FBbUIsSUFBSSxDQUFDLFNBQXhCO01BQ25CLE9BQU8sQ0FBQyxXQUFSLENBQW9CLGdCQUFwQjthQUVBLGVBQUEsQ0FBZ0IsU0FBQTtlQUNkLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBZixDQUFvQixhQUFwQjtNQURjLENBQWhCO0lBTlMsQ0FBWDtJQVNBLEVBQUEsQ0FBRyxzREFBSCxFQUEyRCxTQUFBO2FBQ3pELGFBQUEsQ0FBYyxTQUFBO2VBQ1osTUFBQSxDQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBZSxDQUFBLGtCQUFBLENBQXBDLENBQXdELENBQUMsV0FBekQsQ0FBQTtNQURZLENBQWQ7SUFEeUQsQ0FBM0Q7SUFJQSxRQUFBLENBQVMscUJBQVQsRUFBZ0MsU0FBQTthQUM5QixFQUFBLENBQUcsMkNBQUgsRUFBZ0QsU0FBQTtlQUM5QyxNQUFBLENBQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBZixDQUFBLENBQW9DLENBQUMsT0FBckMsQ0FBQSxDQUE4QyxDQUFDLElBQS9DLENBQUEsQ0FBUCxDQUE2RCxDQUFDLElBQTlELENBQW1FLDBEQUFuRTtNQUQ4QyxDQUFoRDtJQUQ4QixDQUFoQztXQU1BLFFBQUEsQ0FBUywwQkFBVCxFQUFxQyxTQUFBO2FBQ25DLEVBQUEsQ0FBRyxvQ0FBSCxFQUF5QyxTQUFBO1FBQ3ZDLElBQUksQ0FBQyxTQUFTLENBQUMsbUJBQWYsQ0FBQSxDQUFvQyxDQUFDLHNCQUFyQyxDQUE0RCxDQUFDLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBRCxFQUFTLENBQUMsQ0FBRCxFQUFJLEVBQUosQ0FBVCxDQUE1RDtRQUNBLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBZCxDQUF1QixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQVgsQ0FBbUIsSUFBSSxDQUFDLFNBQXhCLENBQXZCLEVBQTJELGtCQUEzRDtlQUNBLE1BQUEsQ0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFmLENBQUEsQ0FBb0MsQ0FBQyxPQUFyQyxDQUFBLENBQThDLENBQUMsSUFBL0MsQ0FBQSxDQUFQLENBQTZELENBQUMsSUFBOUQsQ0FBbUUsaUVBQW5FO01BSHVDLENBQXpDO0lBRG1DLENBQXJDO0VBNUIyQixDQUE3QjtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZGVzY3JpYmUgXCJhdG9tIHdyYXAgaW4gdGFnXCIsIC0+XG5cbiAgW3dvcmtzcGFjZUVsZW1lbnQsIGFjdGl2YXRpb25Qcm9taXNlXSA9IFtdXG5cbiAgcGFja2FnZUxvYWRlZCA9IChjYWxsYmFjaykgLT5cbiAgICBhdG9tLmNvbW1hbmRzLmRpc3BhdGNoKHdvcmtzcGFjZUVsZW1lbnQsICd3cmFwLWluLXRhZzp3cmFwJylcbiAgICB3YWl0c0ZvclByb21pc2UgLT4gYWN0aXZhdGlvblByb21pc2VcbiAgICBydW5zKGNhbGxiYWNrKVxuXG4gIGJlZm9yZUVhY2ggLT5cblxuICAgIGFjdGl2YXRpb25Qcm9taXNlID0gYXRvbS5wYWNrYWdlcy5hY3RpdmF0ZVBhY2thZ2UoJ2F0b20td3JhcC1pbi10YWcnKVxuICAgIHdvcmtzcGFjZUVsZW1lbnQgPSBhdG9tLnZpZXdzLmdldFZpZXcoYXRvbS53b3Jrc3BhY2UpXG4gICAgamFzbWluZS5hdHRhY2hUb0RPTSh3b3Jrc3BhY2VFbGVtZW50KVxuXG4gICAgd2FpdHNGb3JQcm9taXNlIC0+XG4gICAgICBhdG9tLndvcmtzcGFjZS5vcGVuICcuL3Rlc3QuaHRtbCdcblxuICBpdCAnU2hvdWxkIGNoZWNrIGlmIFwiYXRvbS13cmFwLWluLXRhZ1wiIHBhY2thZ2UgaXMgbG9hZGVkJywgLT5cbiAgICBwYWNrYWdlTG9hZGVkIC0+XG4gICAgICBleHBlY3QoYXRvbS5wYWNrYWdlcy5sb2FkZWRQYWNrYWdlc1tcImF0b20td3JhcC1pbi10YWdcIl0pLnRvQmVEZWZpbmVkKClcblxuICBkZXNjcmliZSBcIldoZW4gZmlsZSBpcyBsb2FkZWRcIiwgLT5cbiAgICBpdCBcInNob3VsZCBoYXZlIHRlc3QuaHRtbCBvcGVuZWQgaW4gYW4gZWRpdG9yXCIsIC0+XG4gICAgICBleHBlY3QoYXRvbS53b3Jrc3BhY2UuZ2V0QWN0aXZlVGV4dEVkaXRvcigpLmdldFRleHQoKS50cmltKCkpLnRvQmUgXCJcIlwiXG4gICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuXG4gICAgICBcIlwiXCJcblxuICBkZXNjcmliZSBcIldoZW4gZmlsZSBoYXZlIHNlbGVjdGlvblwiLCAtPlxuICAgIGl0IFwiU2hvdWxkIGhhdmUgJ2lwc3VtIGRvbG9yJyBzZWxlY3RlZFwiLCAtPlxuICAgICAgYXRvbS53b3Jrc3BhY2UuZ2V0QWN0aXZlVGV4dEVkaXRvcigpLnNldFNlbGVjdGVkQnVmZmVyUmFuZ2UgW1swLCA2XSwgWzAsIDE3XV1cbiAgICAgIGF0b20uY29tbWFuZHMuZGlzcGF0Y2ggYXRvbS52aWV3cy5nZXRWaWV3KGF0b20ud29ya3NwYWNlKSwgJ3dyYXAtaW4tdGFnOndyYXAnXG4gICAgICBleHBlY3QoYXRvbS53b3Jrc3BhY2UuZ2V0QWN0aXZlVGV4dEVkaXRvcigpLmdldFRleHQoKS50cmltKCkpLnRvQmUgXCJcIlwiXG4gICAgICAgIExvcmVtIDxwPmlwc3VtIGRvbG9yPC9wPiBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LlxuICAgICAgXCJcIlwiXG4iXX0=
