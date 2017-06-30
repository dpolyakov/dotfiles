function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/** @babel */
/* eslint-env jasmine, atomtest */

/*
  This file contains verifying specs for:
  https://github.com/sindresorhus/atom-editorconfig/issues/118
*/

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var testPrefix = _path2['default'].basename(__filename).split('-').shift();
var projectRoot = _path2['default'].join(__dirname, 'fixtures');
var filePath = _path2['default'].join(projectRoot, 'test.' + testPrefix);

describe('editorconfig', function () {
	var textEditor = undefined;
	var textWithoutTrailingWhitespaces = 'I\nam\nProvidence.';
	var textWithManyTrailingWhitespaces = 'I  \t  \nam  \t  \nProvidence.';

	beforeEach(function () {
		waitsForPromise(function () {
			return Promise.all([atom.packages.activatePackage('editorconfig'), atom.workspace.open(filePath)]).then(function (results) {
				textEditor = results[1];
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

	describe('Atom being set to remove trailing whitespaces', function () {
		beforeEach(function () {
			// eslint-disable-next-line camelcase
			textEditor.getBuffer().editorconfig.settings.trim_trailing_whitespace = true;
			// eslint-disable-next-line camelcase
			textEditor.getBuffer().editorconfig.settings.insert_final_newline = false;
		});

		it('should strip trailing whitespaces on save.', function () {
			textEditor.setText(textWithManyTrailingWhitespaces);
			textEditor.save();
			expect(textEditor.getText().length).toEqual(textWithoutTrailingWhitespaces.length);
		});
	});
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wb2x5YWtvdmRhLy5hdG9tL3BhY2thZ2VzL2VkaXRvcmNvbmZpZy9zcGVjL2lzczExOC1zcGVjLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7a0JBUWUsSUFBSTs7OztvQkFDRixNQUFNOzs7O0FBRXZCLElBQU0sVUFBVSxHQUFHLGtCQUFLLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDaEUsSUFBTSxXQUFXLEdBQUcsa0JBQUssSUFBSSxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQztBQUNyRCxJQUFNLFFBQVEsR0FBRyxrQkFBSyxJQUFJLENBQUMsV0FBVyxZQUFVLFVBQVUsQ0FBRyxDQUFDOztBQUU5RCxRQUFRLENBQUMsY0FBYyxFQUFFLFlBQU07QUFDOUIsS0FBSSxVQUFVLFlBQUEsQ0FBQztBQUNmLEtBQU0sOEJBQThCLEdBQUcsb0JBQW9CLENBQUM7QUFDNUQsS0FBTSwrQkFBK0IsR0FBRyxnQ0FBZ0MsQ0FBQzs7QUFFekUsV0FBVSxDQUFDLFlBQU07QUFDaEIsaUJBQWUsQ0FBQztVQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FDWCxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsRUFDN0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQzdCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxPQUFPLEVBQUk7QUFDbEIsY0FBVSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4QixDQUFDO0dBQUEsQ0FDRixDQUFDO0VBQ0YsQ0FBQyxDQUFDOztBQUVILFVBQVMsQ0FBQyxZQUFNOztBQUVmLE1BQUksQ0FBQyxZQUFNO0FBQ1YsbUJBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxVQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUs7QUFDakMsUUFBSSxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFLEVBQUU7QUFDM0IscUJBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQ3BCO0lBQ0QsQ0FBQyxDQUFDO0dBQ0gsQ0FBQyxDQUFDOztBQUVILFVBQVEsQ0FBQyxZQUFNO0FBQ2QsT0FBSTtBQUNILFdBQU8sZ0JBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxLQUFLLEtBQUssQ0FBQztJQUNoRCxDQUFDLE9BQU8sR0FBRyxFQUFFO0FBQ2IsV0FBTyxJQUFJLENBQUM7SUFDWjtHQUNELEVBQUUsSUFBSSxlQUFhLFFBQVEsQ0FBRyxDQUFDO0VBQ2hDLENBQUMsQ0FBQzs7QUFFSCxTQUFRLENBQUMsK0NBQStDLEVBQUUsWUFBTTtBQUMvRCxZQUFVLENBQUMsWUFBTTs7QUFFaEIsYUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDOztBQUU3RSxhQUFVLENBQUMsU0FBUyxFQUFFLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsR0FBRyxLQUFLLENBQUM7R0FDMUUsQ0FBQyxDQUFDOztBQUVILElBQUUsQ0FBQyw0Q0FBNEMsRUFBRSxZQUFNO0FBQ3RELGFBQVUsQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUMsQ0FBQztBQUNwRCxhQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDbEIsU0FBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsOEJBQThCLENBQUMsTUFBTSxDQUFDLENBQUM7R0FDbkYsQ0FBQyxDQUFDO0VBQ0gsQ0FBQyxDQUFDO0NBQ0gsQ0FBQyxDQUFDIiwiZmlsZSI6Ii9Vc2Vycy9wb2x5YWtvdmRhLy5hdG9tL3BhY2thZ2VzL2VkaXRvcmNvbmZpZy9zcGVjL2lzczExOC1zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBiYWJlbCAqL1xuLyogZXNsaW50LWVudiBqYXNtaW5lLCBhdG9tdGVzdCAqL1xuXG4vKlxuICBUaGlzIGZpbGUgY29udGFpbnMgdmVyaWZ5aW5nIHNwZWNzIGZvcjpcbiAgaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9hdG9tLWVkaXRvcmNvbmZpZy9pc3N1ZXMvMTE4XG4qL1xuXG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5cbmNvbnN0IHRlc3RQcmVmaXggPSBwYXRoLmJhc2VuYW1lKF9fZmlsZW5hbWUpLnNwbGl0KCctJykuc2hpZnQoKTtcbmNvbnN0IHByb2plY3RSb290ID0gcGF0aC5qb2luKF9fZGlybmFtZSwgJ2ZpeHR1cmVzJyk7XG5jb25zdCBmaWxlUGF0aCA9IHBhdGguam9pbihwcm9qZWN0Um9vdCwgYHRlc3QuJHt0ZXN0UHJlZml4fWApO1xuXG5kZXNjcmliZSgnZWRpdG9yY29uZmlnJywgKCkgPT4ge1xuXHRsZXQgdGV4dEVkaXRvcjtcblx0Y29uc3QgdGV4dFdpdGhvdXRUcmFpbGluZ1doaXRlc3BhY2VzID0gJ0lcXG5hbVxcblByb3ZpZGVuY2UuJztcblx0Y29uc3QgdGV4dFdpdGhNYW55VHJhaWxpbmdXaGl0ZXNwYWNlcyA9ICdJICBcXHQgIFxcbmFtICBcXHQgIFxcblByb3ZpZGVuY2UuJztcblxuXHRiZWZvcmVFYWNoKCgpID0+IHtcblx0XHR3YWl0c0ZvclByb21pc2UoKCkgPT5cblx0XHRcdFByb21pc2UuYWxsKFtcblx0XHRcdFx0YXRvbS5wYWNrYWdlcy5hY3RpdmF0ZVBhY2thZ2UoJ2VkaXRvcmNvbmZpZycpLFxuXHRcdFx0XHRhdG9tLndvcmtzcGFjZS5vcGVuKGZpbGVQYXRoKVxuXHRcdFx0XSkudGhlbihyZXN1bHRzID0+IHtcblx0XHRcdFx0dGV4dEVkaXRvciA9IHJlc3VsdHNbMV07XG5cdFx0XHR9KVxuXHRcdCk7XG5cdH0pO1xuXG5cdGFmdGVyRWFjaCgoKSA9PiB7XG5cdFx0Ly8gcmVtb3ZlIHRoZSBjcmVhdGVkIGZpeHR1cmUsIGlmIGl0IGV4aXN0c1xuXHRcdHJ1bnMoKCkgPT4ge1xuXHRcdFx0ZnMuc3RhdChmaWxlUGF0aCwgKGVyciwgc3RhdHMpID0+IHtcblx0XHRcdFx0aWYgKCFlcnIgJiYgc3RhdHMuaXNGaWxlKCkpIHtcblx0XHRcdFx0XHRmcy51bmxpbmsoZmlsZVBhdGgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9KTtcblxuXHRcdHdhaXRzRm9yKCgpID0+IHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHJldHVybiBmcy5zdGF0U3luYyhmaWxlUGF0aCkuaXNGaWxlKCkgPT09IGZhbHNlO1xuXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH0sIDUwMDAsIGByZW1vdmVkICR7ZmlsZVBhdGh9YCk7XG5cdH0pO1xuXG5cdGRlc2NyaWJlKCdBdG9tIGJlaW5nIHNldCB0byByZW1vdmUgdHJhaWxpbmcgd2hpdGVzcGFjZXMnLCAoKSA9PiB7XG5cdFx0YmVmb3JlRWFjaCgoKSA9PiB7XG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2FtZWxjYXNlXG5cdFx0XHR0ZXh0RWRpdG9yLmdldEJ1ZmZlcigpLmVkaXRvcmNvbmZpZy5zZXR0aW5ncy50cmltX3RyYWlsaW5nX3doaXRlc3BhY2UgPSB0cnVlO1xuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNhbWVsY2FzZVxuXHRcdFx0dGV4dEVkaXRvci5nZXRCdWZmZXIoKS5lZGl0b3Jjb25maWcuc2V0dGluZ3MuaW5zZXJ0X2ZpbmFsX25ld2xpbmUgPSBmYWxzZTtcblx0XHR9KTtcblxuXHRcdGl0KCdzaG91bGQgc3RyaXAgdHJhaWxpbmcgd2hpdGVzcGFjZXMgb24gc2F2ZS4nLCAoKSA9PiB7XG5cdFx0XHR0ZXh0RWRpdG9yLnNldFRleHQodGV4dFdpdGhNYW55VHJhaWxpbmdXaGl0ZXNwYWNlcyk7XG5cdFx0XHR0ZXh0RWRpdG9yLnNhdmUoKTtcblx0XHRcdGV4cGVjdCh0ZXh0RWRpdG9yLmdldFRleHQoKS5sZW5ndGgpLnRvRXF1YWwodGV4dFdpdGhvdXRUcmFpbGluZ1doaXRlc3BhY2VzLmxlbmd0aCk7XG5cdFx0fSk7XG5cdH0pO1xufSk7XG4iXX0=