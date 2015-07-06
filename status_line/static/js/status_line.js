$(function() {
    function StatusLineViewModel(parameters) {
        var self = this;

        self.status_line = ko.observable();
        self.show_status = ko.observable(false);

        self.initialMessage = function(data) {
            self.status_line(data.status_line);
            self.show_status(data.status_line ? true : false);
        };

        self.onStartupComplete = function() {
            // WebApp started, get message if any
            $.ajax({
                url: API_BASEURL + "plugin/status_line",
                type: "GET",
                dataType: "json",
                success: self.initialMessage
            });
        }

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