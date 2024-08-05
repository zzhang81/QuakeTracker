type ProjectConfigType = {
  name: string;
  path: string;
  python: {
    interpreter: string;
  },
  station?: {
    list: string[];
    xmlFilePath: string;
  },
  data?: {
    mseedFilesPath: string; []
  },
}