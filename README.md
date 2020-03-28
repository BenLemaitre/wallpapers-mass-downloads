# wallpaper-mass-downloads
Mass download of wallpapers with Unsplash API (Node)

### Required
* Node
* NPM


### Usage
```
node index.js [numberPerTag tags destPath]
```

#### Example
```
node index.js 10 space beach-sunset /path/to/dest
```
10 pictures of space and 10 pictures of "beach sunset" would be downloaded.

### Properties
* `numberPerTag` (int, required)
Number of wallpapers to fetch per tag.
* `tags` (string, required)
Search queries, multiple queries can be added. For several keywords in one "tag", use "-" (example: "beach-sunset").
* `destPath` (string, required)
Destination path where wallpapers will be saved.



##### Made to mess around with Node and for my personal usage.