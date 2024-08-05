import { appWindow } from '@tauri-apps/api/window';
import { open } from '@tauri-apps/api/dialog';
import { OpenProject } from '@/managers/project';
import { WebviewWindow } from '@tauri-apps/api/window';
import { APPLICATION_NAME } from '@/constants';


export type ToolsType = {
  addTab: any;
}


const MenuActions = {
  newProject: (tools: ToolsType) => {
    return () => {
      tools.addTab({
        kind: 'wizard',
        title: 'New Project Wizard',
        param: {},
      });
    };
  },
  newWindows: () => {
    new WebviewWindow(APPLICATION_NAME, {
      url: 'index.html',
    });
  },
  openProject: (tools: ToolsType) => {
    return () => {
      open({
        directory: true,
        multiple: false,
      }).then((result) => {
        if (result !== undefined) {
          if (typeof result === 'string') {
            console.log('Open project:', result);
            OpenProject(result);
          }
        }
      });
    };
  },
  exit: () => {
    appWindow.close();
  },
};

export default MenuActions;