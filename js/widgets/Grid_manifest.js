(function ($, OliveUI, new_brokerage_object_grid_widget, new_brokerage_object_grid_config_js) {
  'use strict';
  OliveUI.addWidgetManifest({
    name: 'Grid Widget',
    description: '',
    createUIFn: function () {
      var _new_brokerage_object_grid_widget = function (config = {}) {
        var _dom = {
          rootDiv: $('<div>')
        };
        return {
          render: function () {
            return _dom.rootDiv;
          },
          setContent: function (content = {}) {
            content = content || '';
            content.gridrengerconfig = content.gridrengerconfig || '';
            _dom.rootDiv.empty();
            try {
              _dom.rootDiv.append(OliveUI.modules.new_brokerage_object_grid_widget_js().render(content));
            } catch (e) {
              OliveUI.utils.showError(e, _dom.rootDiv);
            }
          }
        };
      };
      return _new_brokerage_object_grid_widget();
    },
    createConfigurationUIFn: function () {
      return new_brokerage_object_grid_config_js({});
    },
    configurationMappingFn: function (widget,inputthatwasrecieved,inputtobepassed) {
      Object.assign(inputtobepassed, inputthatwasrecieved);
      if (typeof inputtobepassed!='undefined' && typeof inputtobepassed.name!='undefined' ){
        widget.setWidgetTitle(inputtobepassed.name);
      }
    },
  });
}(jQuery, OliveUI, OliveUI.modules.new_brokerage_object_grid_widget_js, OliveUI.modules.new_brokerage_object_grid_config_js));
