Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/** @babel */

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _pify = require('pify');

var _pify2 = _interopRequireDefault(_pify);

var init = function init() {
	var basePath = '';

	if (atom.project.getPaths().length > 0) {
		basePath = atom.project.getPaths()[0];
	} else if (atom.workspace.getActiveTextEditor() && atom.workspace.getActiveTextEditor().getPath()) {
		basePath = _path2['default'].dirname(atom.workspace.getActiveTextEditor().getPath());
	} else {
		atom.notifications.addError('An .editorconfig file can\'t be generated without an open file or project.');
		return;
	}

	var configFile = _path2['default'].join(basePath, '.editorconfig');

	var conf = {
		core: atom.config.get('core'),
		editor: atom.config.get('editor'),
		whitespace: atom.config.get('whitespace')
	};

	var indent = conf.editor.softTabs ? 'indent_style = space\nindent_size = ' + conf.editor.tabLength : 'indent_style = tab';

	var endOfLine = process.platform === 'win32' ? 'crlf' : 'lf';
	var charset = conf.core.fileEncoding.replace('utf8', 'utf-8') || 'utf-8';

	var removeTrailingWhitespace = atom.config.get('whitespace.removeTrailingWhitespace') && 'true' || 'false';
	var ensureFinalNewline = atom.config.get('whitespace.ensureSingleTrailingNewline') && 'true' || 'false';

	var ret = 'root = true\n\n[*]\n' + indent + '\nend_of_line = ' + endOfLine + '\ncharset = ' + charset + '\ntrim_trailing_whitespace = ' + removeTrailingWhitespace + '\ninsert_final_newline = ' + ensureFinalNewline + '\n\n[*.md]\ntrim_trailing_whitespace = false\n';

	(0, _pify2['default'])(_fs2['default'].writeFile)(configFile, ret, { flag: 'wx' }).then(function () {
		atom.notifications.addSuccess('.editorconfig file successfully generated', {
			detail: 'An .editorconfig file was successfully generated in your project based on your current settings.'
		});
	})['catch'](function (err) {
		if (err.code === 'EEXIST') {
			atom.notifications.addError('An .editorconfig file already exists in your project root.');
		} else {
			atom.notifications.addError(err.message, { detail: err.stack });
		}
	});
};

var subscriber = function subscriber() {
	atom.commands.add('atom-workspace', 'EditorConfig:generate-config', init);
};

exports['default'] = subscriber;
exports.init = init;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wb2x5YWtvdmRhLy5hdG9tL3BhY2thZ2VzL2VkaXRvcmNvbmZpZy9jb21tYW5kcy9nZW5lcmF0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztrQkFDZSxJQUFJOzs7O29CQUNGLE1BQU07Ozs7b0JBQ04sTUFBTTs7OztBQUV2QixJQUFNLElBQUksR0FBRyxTQUFQLElBQUksR0FBUztBQUNsQixLQUFJLFFBQVEsR0FBRyxFQUFFLENBQUM7O0FBRWxCLEtBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0FBQ3ZDLFVBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ3RDLE1BQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixFQUFFLElBQzlDLElBQUksQ0FBQyxTQUFTLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxPQUFPLEVBQUUsRUFBRTtBQUNoRCxVQUFRLEdBQUcsa0JBQUssT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0VBQ3hFLE1BQU07QUFDTixNQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsOEVBQTZFLENBQUM7QUFDekcsU0FBTztFQUNQOztBQUVELEtBQU0sVUFBVSxHQUFHLGtCQUFLLElBQUksQ0FBQyxRQUFRLEVBQUUsZUFBZSxDQUFDLENBQUM7O0FBRXhELEtBQU0sSUFBSSxHQUFHO0FBQ1osTUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztBQUM3QixRQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDO0FBQ2pDLFlBQVUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUM7RUFDekMsQ0FBQzs7QUFFRixLQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsNENBQ0ssSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQzVELG9CQUFvQixDQUFDOztBQUV0QixLQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsUUFBUSxLQUFLLE9BQU8sR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBQy9ELEtBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLElBQUksT0FBTyxDQUFDOztBQUUzRSxLQUFNLHdCQUF3QixHQUM3QixBQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLHFDQUFxQyxDQUFDLElBQUksTUFBTSxJQUNqRSxPQUFPLEFBQ1AsQ0FBQztBQUNGLEtBQU0sa0JBQWtCLEdBQ3ZCLEFBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsd0NBQXdDLENBQUMsSUFBSSxNQUFNLElBQ3BFLE9BQU8sQUFDUCxDQUFDOztBQUVGLEtBQU0sR0FBRyw0QkFJUixNQUFNLHdCQUNRLFNBQVMsb0JBQ2IsT0FBTyxxQ0FDVSx3QkFBd0IsaUNBQzVCLGtCQUFrQixtREFJMUMsQ0FBQzs7QUFFRCx3QkFBSyxnQkFBRyxTQUFTLENBQUMsQ0FBQyxVQUFVLEVBQUUsR0FBRyxFQUFFLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQU07QUFDNUQsTUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsMkNBQTJDLEVBQUU7QUFDMUUsU0FBTSxFQUFFLGtHQUFrRztHQUMxRyxDQUFDLENBQUM7RUFDSCxDQUFDLFNBQU0sQ0FBQyxVQUFBLEdBQUcsRUFBSTtBQUNmLE1BQUksR0FBRyxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7QUFDMUIsT0FBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsNERBQTRELENBQUMsQ0FBQztHQUMxRixNQUFNO0FBQ04sT0FBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQztHQUM5RDtFQUNELENBQUMsQ0FBQztDQUNILENBQUM7O0FBRUYsSUFBTSxVQUFVLEdBQUcsU0FBYixVQUFVLEdBQVM7QUFDeEIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsOEJBQThCLEVBQUUsSUFBSSxDQUFDLENBQUM7Q0FDMUUsQ0FBQzs7cUJBRU0sVUFBVTtRQUFhLElBQUksR0FBSixJQUFJIiwiZmlsZSI6Ii9Vc2Vycy9wb2x5YWtvdmRhLy5hdG9tL3BhY2thZ2VzL2VkaXRvcmNvbmZpZy9jb21tYW5kcy9nZW5lcmF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAYmFiZWwgKi9cbmltcG9ydCBmcyBmcm9tICdmcyc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBwaWZ5IGZyb20gJ3BpZnknO1xuXG5jb25zdCBpbml0ID0gKCkgPT4ge1xuXHRsZXQgYmFzZVBhdGggPSAnJztcblxuXHRpZiAoYXRvbS5wcm9qZWN0LmdldFBhdGhzKCkubGVuZ3RoID4gMCkge1xuXHRcdGJhc2VQYXRoID0gYXRvbS5wcm9qZWN0LmdldFBhdGhzKClbMF07XG5cdH0gZWxzZSBpZiAoYXRvbS53b3Jrc3BhY2UuZ2V0QWN0aXZlVGV4dEVkaXRvcigpICYmXG5cdFx0YXRvbS53b3Jrc3BhY2UuZ2V0QWN0aXZlVGV4dEVkaXRvcigpLmdldFBhdGgoKSkge1xuXHRcdGJhc2VQYXRoID0gcGF0aC5kaXJuYW1lKGF0b20ud29ya3NwYWNlLmdldEFjdGl2ZVRleHRFZGl0b3IoKS5nZXRQYXRoKCkpO1xuXHR9IGVsc2Uge1xuXHRcdGF0b20ubm90aWZpY2F0aW9ucy5hZGRFcnJvcihgQW4gLmVkaXRvcmNvbmZpZyBmaWxlIGNhbid0IGJlIGdlbmVyYXRlZCB3aXRob3V0IGFuIG9wZW4gZmlsZSBvciBwcm9qZWN0LmApO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGNvbmZpZ0ZpbGUgPSBwYXRoLmpvaW4oYmFzZVBhdGgsICcuZWRpdG9yY29uZmlnJyk7XG5cblx0Y29uc3QgY29uZiA9IHtcblx0XHRjb3JlOiBhdG9tLmNvbmZpZy5nZXQoJ2NvcmUnKSxcblx0XHRlZGl0b3I6IGF0b20uY29uZmlnLmdldCgnZWRpdG9yJyksXG5cdFx0d2hpdGVzcGFjZTogYXRvbS5jb25maWcuZ2V0KCd3aGl0ZXNwYWNlJylcblx0fTtcblxuXHRjb25zdCBpbmRlbnQgPSBjb25mLmVkaXRvci5zb2Z0VGFicyA/XG5cdFx0YGluZGVudF9zdHlsZSA9IHNwYWNlXFxuaW5kZW50X3NpemUgPSAke2NvbmYuZWRpdG9yLnRhYkxlbmd0aH1gIDpcblx0XHQnaW5kZW50X3N0eWxlID0gdGFiJztcblxuXHRjb25zdCBlbmRPZkxpbmUgPSBwcm9jZXNzLnBsYXRmb3JtID09PSAnd2luMzInID8gJ2NybGYnIDogJ2xmJztcblx0Y29uc3QgY2hhcnNldCA9IGNvbmYuY29yZS5maWxlRW5jb2RpbmcucmVwbGFjZSgndXRmOCcsICd1dGYtOCcpIHx8ICd1dGYtOCc7XG5cblx0Y29uc3QgcmVtb3ZlVHJhaWxpbmdXaGl0ZXNwYWNlID0gKFxuXHRcdChhdG9tLmNvbmZpZy5nZXQoJ3doaXRlc3BhY2UucmVtb3ZlVHJhaWxpbmdXaGl0ZXNwYWNlJykgJiYgJ3RydWUnKSB8fFxuXHRcdCdmYWxzZSdcblx0KTtcblx0Y29uc3QgZW5zdXJlRmluYWxOZXdsaW5lID0gKFxuXHRcdChhdG9tLmNvbmZpZy5nZXQoJ3doaXRlc3BhY2UuZW5zdXJlU2luZ2xlVHJhaWxpbmdOZXdsaW5lJykgJiYgJ3RydWUnKSB8fFxuXHRcdCdmYWxzZSdcblx0KTtcblxuXHRjb25zdCByZXQgPVxuYHJvb3QgPSB0cnVlXG5cblsqXVxuJHtpbmRlbnR9XG5lbmRfb2ZfbGluZSA9ICR7ZW5kT2ZMaW5lfVxuY2hhcnNldCA9ICR7Y2hhcnNldH1cbnRyaW1fdHJhaWxpbmdfd2hpdGVzcGFjZSA9ICR7cmVtb3ZlVHJhaWxpbmdXaGl0ZXNwYWNlfVxuaW5zZXJ0X2ZpbmFsX25ld2xpbmUgPSAke2Vuc3VyZUZpbmFsTmV3bGluZX1cblxuWyoubWRdXG50cmltX3RyYWlsaW5nX3doaXRlc3BhY2UgPSBmYWxzZVxuYDtcblxuXHRwaWZ5KGZzLndyaXRlRmlsZSkoY29uZmlnRmlsZSwgcmV0LCB7ZmxhZzogJ3d4J30pLnRoZW4oKCkgPT4ge1xuXHRcdGF0b20ubm90aWZpY2F0aW9ucy5hZGRTdWNjZXNzKCcuZWRpdG9yY29uZmlnIGZpbGUgc3VjY2Vzc2Z1bGx5IGdlbmVyYXRlZCcsIHtcblx0XHRcdGRldGFpbDogJ0FuIC5lZGl0b3Jjb25maWcgZmlsZSB3YXMgc3VjY2Vzc2Z1bGx5IGdlbmVyYXRlZCBpbiB5b3VyIHByb2plY3QgYmFzZWQgb24geW91ciBjdXJyZW50IHNldHRpbmdzLidcblx0XHR9KTtcblx0fSkuY2F0Y2goZXJyID0+IHtcblx0XHRpZiAoZXJyLmNvZGUgPT09ICdFRVhJU1QnKSB7XG5cdFx0XHRhdG9tLm5vdGlmaWNhdGlvbnMuYWRkRXJyb3IoJ0FuIC5lZGl0b3Jjb25maWcgZmlsZSBhbHJlYWR5IGV4aXN0cyBpbiB5b3VyIHByb2plY3Qgcm9vdC4nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0YXRvbS5ub3RpZmljYXRpb25zLmFkZEVycm9yKGVyci5tZXNzYWdlLCB7ZGV0YWlsOiBlcnIuc3RhY2t9KTtcblx0XHR9XG5cdH0pO1xufTtcblxuY29uc3Qgc3Vic2NyaWJlciA9ICgpID0+IHtcblx0YXRvbS5jb21tYW5kcy5hZGQoJ2F0b20td29ya3NwYWNlJywgJ0VkaXRvckNvbmZpZzpnZW5lcmF0ZS1jb25maWcnLCBpbml0KTtcbn07XG5cbmV4cG9ydCB7c3Vic2NyaWJlciBhcyBkZWZhdWx0LCBpbml0fTtcbiJdfQ==