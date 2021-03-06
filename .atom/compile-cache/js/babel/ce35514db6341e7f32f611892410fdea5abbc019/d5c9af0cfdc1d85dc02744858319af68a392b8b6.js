function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/** @babel */
/* eslint-env jasmine, atomtest */

/*
	This file contains verifying specs for:
	https://github.com/sindresorhus/atom-editorconfig/issues/157

	The current implementation resets the tabType without respecting Atom's default implementation
	where - in the case there's no tabType prescribed - at first is checked if the file already
	uses a specific tabType. Then thesetting isbeing chosen by the content's scope.
*/

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var testPrefix = _path2['default'].basename(__filename).split('-').shift();
var projectRoot = _path2['default'].join(__dirname, 'fixtures', testPrefix);
var filePath = _path2['default'].join(projectRoot, 'test.' + testPrefix);

var snippetWithSoftTabs = '    this is it\n  let us go on.';
var snippetWithHardTabs = '\t\tthis is it\n\tlet us go on.';

describe('editorconfig', function () {
	var textEditor = undefined;

	beforeEach(function () {
		waitsForPromise(function () {
			return Promise.all([atom.packages.activatePackage('editorconfig'), atom.workspace.open(filePath)]).then(function (results) {
				textEditor = results.pop();
			});
		});
	});

	afterEach(function () {
		// remove the created fixture, if it exists
		runs(function () {
			_fs2['default'].stat(filePath, function (err, stats) {
				if (!err && stats.isFile()) {
					_fs2['default'].unlink(filePath);
				}
			});
		});

		waitsFor(function () {
			try {
				return _fs2['default'].statSync(filePath).isFile() === false;
			} catch (err) {
				return true;
			}
		}, 5000, 'removed ' + filePath);
	});

	describe('EditorConfig', function () {
		it('should consult editor.usesSoftTabs in case tabType is set to auto', function () {
			var configOptions = { scope: textEditor.getRootScopeDescriptor() };
			var ecfg = textEditor.getBuffer().editorconfig;

			// eslint-disable-next-line camelcase
			ecfg.settings.indent_style = 'auto';

			atom.config.set('editor.softTabs', true, configOptions);
			textEditor.setText(snippetWithHardTabs);
			ecfg.applySettings();

			expect(textEditor.getSoftTabs()).toBeFalsy();

			atom.config.set('editor.softTabs', false, configOptions);
			textEditor.setText(snippetWithSoftTabs);
			ecfg.applySettings();

			expect(textEditor.getSoftTabs()).toBeTruthy();
		});
	});
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wb2x5YWtvdmRhLy5hdG9tL3BhY2thZ2VzL2VkaXRvcmNvbmZpZy9zcGVjL2lzczE1Ny1zcGVjLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O2tCQVllLElBQUk7Ozs7b0JBQ0YsTUFBTTs7OztBQUV2QixJQUFNLFVBQVUsR0FBRyxrQkFBSyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ2hFLElBQU0sV0FBVyxHQUFHLGtCQUFLLElBQUksQ0FBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQ2pFLElBQU0sUUFBUSxHQUFHLGtCQUFLLElBQUksQ0FBQyxXQUFXLFlBQVUsVUFBVSxDQUFHLENBQUM7O0FBRTlELElBQU0sbUJBQW1CLEdBQUcsaUNBQWlDLENBQUM7QUFDOUQsSUFBTSxtQkFBbUIsR0FBRyxpQ0FBaUMsQ0FBQzs7QUFFOUQsUUFBUSxDQUFDLGNBQWMsRUFBRSxZQUFNO0FBQzlCLEtBQUksVUFBVSxZQUFBLENBQUM7O0FBRWYsV0FBVSxDQUFDLFlBQU07QUFDaEIsaUJBQWUsQ0FBQztVQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FDWCxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsRUFDN0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQzdCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxPQUFPLEVBQUk7QUFDbEIsY0FBVSxHQUFHLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUMzQixDQUFDO0dBQUEsQ0FDRixDQUFDO0VBQ0YsQ0FBQyxDQUFDOztBQUVILFVBQVMsQ0FBQyxZQUFNOztBQUVmLE1BQUksQ0FBQyxZQUFNO0FBQ1YsbUJBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxVQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUs7QUFDakMsUUFBSSxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFLEVBQUU7QUFDM0IscUJBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQ3BCO0lBQ0QsQ0FBQyxDQUFDO0dBQ0gsQ0FBQyxDQUFDOztBQUVILFVBQVEsQ0FBQyxZQUFNO0FBQ2QsT0FBSTtBQUNILFdBQU8sZ0JBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxLQUFLLEtBQUssQ0FBQztJQUNoRCxDQUFDLE9BQU8sR0FBRyxFQUFFO0FBQ2IsV0FBTyxJQUFJLENBQUM7SUFDWjtHQUNELEVBQUUsSUFBSSxlQUFhLFFBQVEsQ0FBRyxDQUFDO0VBQ2hDLENBQUMsQ0FBQzs7QUFFSCxTQUFRLENBQUMsY0FBYyxFQUFFLFlBQU07QUFDOUIsSUFBRSxDQUFDLG1FQUFtRSxFQUFFLFlBQU07QUFDN0UsT0FBTSxhQUFhLEdBQUcsRUFBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLHNCQUFzQixFQUFFLEVBQUMsQ0FBQztBQUNuRSxPQUFNLElBQUksR0FBRyxVQUFVLENBQUMsU0FBUyxFQUFFLENBQUMsWUFBWSxDQUFDOzs7QUFHakQsT0FBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDOztBQUVwQyxPQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFDeEQsYUFBVSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQ3hDLE9BQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQzs7QUFFckIsU0FBTSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDOztBQUU3QyxPQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFDekQsYUFBVSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQ3hDLE9BQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQzs7QUFFckIsU0FBTSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO0dBQzlDLENBQUMsQ0FBQztFQUNILENBQUMsQ0FBQztDQUNILENBQUMsQ0FBQyIsImZpbGUiOiIvVXNlcnMvcG9seWFrb3ZkYS8uYXRvbS9wYWNrYWdlcy9lZGl0b3Jjb25maWcvc3BlYy9pc3MxNTctc3BlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAYmFiZWwgKi9cbi8qIGVzbGludC1lbnYgamFzbWluZSwgYXRvbXRlc3QgKi9cblxuLypcblx0VGhpcyBmaWxlIGNvbnRhaW5zIHZlcmlmeWluZyBzcGVjcyBmb3I6XG5cdGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvYXRvbS1lZGl0b3Jjb25maWcvaXNzdWVzLzE1N1xuXG5cdFRoZSBjdXJyZW50IGltcGxlbWVudGF0aW9uIHJlc2V0cyB0aGUgdGFiVHlwZSB3aXRob3V0IHJlc3BlY3RpbmcgQXRvbSdzIGRlZmF1bHQgaW1wbGVtZW50YXRpb25cblx0d2hlcmUgLSBpbiB0aGUgY2FzZSB0aGVyZSdzIG5vIHRhYlR5cGUgcHJlc2NyaWJlZCAtIGF0IGZpcnN0IGlzIGNoZWNrZWQgaWYgdGhlIGZpbGUgYWxyZWFkeVxuXHR1c2VzIGEgc3BlY2lmaWMgdGFiVHlwZS4gVGhlbiB0aGVzZXR0aW5nIGlzYmVpbmcgY2hvc2VuIGJ5IHRoZSBjb250ZW50J3Mgc2NvcGUuXG4qL1xuXG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5cbmNvbnN0IHRlc3RQcmVmaXggPSBwYXRoLmJhc2VuYW1lKF9fZmlsZW5hbWUpLnNwbGl0KCctJykuc2hpZnQoKTtcbmNvbnN0IHByb2plY3RSb290ID0gcGF0aC5qb2luKF9fZGlybmFtZSwgJ2ZpeHR1cmVzJywgdGVzdFByZWZpeCk7XG5jb25zdCBmaWxlUGF0aCA9IHBhdGguam9pbihwcm9qZWN0Um9vdCwgYHRlc3QuJHt0ZXN0UHJlZml4fWApO1xuXG5jb25zdCBzbmlwcGV0V2l0aFNvZnRUYWJzID0gJyAgICB0aGlzIGlzIGl0XFxuICBsZXQgdXMgZ28gb24uJztcbmNvbnN0IHNuaXBwZXRXaXRoSGFyZFRhYnMgPSAnXFx0XFx0dGhpcyBpcyBpdFxcblxcdGxldCB1cyBnbyBvbi4nO1xuXG5kZXNjcmliZSgnZWRpdG9yY29uZmlnJywgKCkgPT4ge1xuXHRsZXQgdGV4dEVkaXRvcjtcblxuXHRiZWZvcmVFYWNoKCgpID0+IHtcblx0XHR3YWl0c0ZvclByb21pc2UoKCkgPT5cblx0XHRcdFByb21pc2UuYWxsKFtcblx0XHRcdFx0YXRvbS5wYWNrYWdlcy5hY3RpdmF0ZVBhY2thZ2UoJ2VkaXRvcmNvbmZpZycpLFxuXHRcdFx0XHRhdG9tLndvcmtzcGFjZS5vcGVuKGZpbGVQYXRoKVxuXHRcdFx0XSkudGhlbihyZXN1bHRzID0+IHtcblx0XHRcdFx0dGV4dEVkaXRvciA9IHJlc3VsdHMucG9wKCk7XG5cdFx0XHR9KVxuXHRcdCk7XG5cdH0pO1xuXG5cdGFmdGVyRWFjaCgoKSA9PiB7XG5cdFx0Ly8gcmVtb3ZlIHRoZSBjcmVhdGVkIGZpeHR1cmUsIGlmIGl0IGV4aXN0c1xuXHRcdHJ1bnMoKCkgPT4ge1xuXHRcdFx0ZnMuc3RhdChmaWxlUGF0aCwgKGVyciwgc3RhdHMpID0+IHtcblx0XHRcdFx0aWYgKCFlcnIgJiYgc3RhdHMuaXNGaWxlKCkpIHtcblx0XHRcdFx0XHRmcy51bmxpbmsoZmlsZVBhdGgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9KTtcblxuXHRcdHdhaXRzRm9yKCgpID0+IHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHJldHVybiBmcy5zdGF0U3luYyhmaWxlUGF0aCkuaXNGaWxlKCkgPT09IGZhbHNlO1xuXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH0sIDUwMDAsIGByZW1vdmVkICR7ZmlsZVBhdGh9YCk7XG5cdH0pO1xuXG5cdGRlc2NyaWJlKCdFZGl0b3JDb25maWcnLCAoKSA9PiB7XG5cdFx0aXQoJ3Nob3VsZCBjb25zdWx0IGVkaXRvci51c2VzU29mdFRhYnMgaW4gY2FzZSB0YWJUeXBlIGlzIHNldCB0byBhdXRvJywgKCkgPT4ge1xuXHRcdFx0Y29uc3QgY29uZmlnT3B0aW9ucyA9IHtzY29wZTogdGV4dEVkaXRvci5nZXRSb290U2NvcGVEZXNjcmlwdG9yKCl9O1xuXHRcdFx0Y29uc3QgZWNmZyA9IHRleHRFZGl0b3IuZ2V0QnVmZmVyKCkuZWRpdG9yY29uZmlnO1xuXG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2FtZWxjYXNlXG5cdFx0XHRlY2ZnLnNldHRpbmdzLmluZGVudF9zdHlsZSA9ICdhdXRvJztcblxuXHRcdFx0YXRvbS5jb25maWcuc2V0KCdlZGl0b3Iuc29mdFRhYnMnLCB0cnVlLCBjb25maWdPcHRpb25zKTtcblx0XHRcdHRleHRFZGl0b3Iuc2V0VGV4dChzbmlwcGV0V2l0aEhhcmRUYWJzKTtcblx0XHRcdGVjZmcuYXBwbHlTZXR0aW5ncygpO1xuXG5cdFx0XHRleHBlY3QodGV4dEVkaXRvci5nZXRTb2Z0VGFicygpKS50b0JlRmFsc3koKTtcblxuXHRcdFx0YXRvbS5jb25maWcuc2V0KCdlZGl0b3Iuc29mdFRhYnMnLCBmYWxzZSwgY29uZmlnT3B0aW9ucyk7XG5cdFx0XHR0ZXh0RWRpdG9yLnNldFRleHQoc25pcHBldFdpdGhTb2Z0VGFicyk7XG5cdFx0XHRlY2ZnLmFwcGx5U2V0dGluZ3MoKTtcblxuXHRcdFx0ZXhwZWN0KHRleHRFZGl0b3IuZ2V0U29mdFRhYnMoKSkudG9CZVRydXRoeSgpO1xuXHRcdH0pO1xuXHR9KTtcbn0pO1xuIl19