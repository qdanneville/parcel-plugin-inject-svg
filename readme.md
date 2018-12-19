![](assets/parcel-plugin-inject-svg.png)

This parcel plugin will check all img tags with an external svg and replace the tag with inline svg.
It uses the PostHTML feature of parcel
---

[【What is Parcel】](https://parceljs.org/)
[【What is Parcel PostHTML】](https://parceljs.org/html.html#posthtml)

## Installation

add a .posthtmlrc to you root project, it will automatically trigger the plugin when the htmlBundler of parcel is called

```
{
  "plugins": {
    "posthtml-svg-inline": {
      "root": "src/templates"
    }
  }
}
```

To add the plugin to your existing project, run the below command.

```
npm i parcel-plugin-inject-svg -D
```
or
```
yarn add parcel-plugin-inject-svg -D
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details