# Colmena Component Explorer Style
Colmena style for the Loopback API Explorer.

## Usage

Configure loopback-component-explorer in component-config.json by setting `uiDirs` as the path to your api-explorer-style installation:

```json
{
  "loopback-component-explorer": {
    "mountPath": "/explorer",
    "uiDirs": [
      "node_modules/@colmena/api-explorer-style"
    ]
  }
}
```
