# StatusLine

Simple plugin which prints the controller status line (actually the M117 Display Message command) on the SideBar

![StatusLine](status_line.png?raw=true) 

## Setup

Install via the bundled [Plugin Manager](https://github.com/foosel/OctoPrint/wiki/Plugin:-Plugin-Manager)
or manually using this URL:

    https://github.com/AmedeeBulle/StatusLine/archive/master.zip

## Configuration

If you want to move the plugin to appear at the top of the sidebar, modify the config.yaml file as follows:

```yaml
appearance:
  components:
    order:
      sidebar:
        - plugin_status_line
```
