$(function() {
    function StatusLineViewModel(parameters) {
        var self = this;

        self.status_line = ko.observable();
        self.show_status = ko.observable(false);

        self.onDataUpdaterPluginMessage = function(plugin, data) {
            if (plugin != "status_line") {
                return;
            }

            self.status_line(data.status_line);
            self.show_status(true);
        };
    }

    OCTOPRINT_VIEWMODELS.push([
        StatusLineViewModel,
        [ ],
        ["#status_line"]
    ]);
})