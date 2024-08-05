import { ProjectState } from './valtio';
import { readTextFile } from '@tauri-apps/api/fs';
import { APPLICATION_NAME, PROJECT_CONFIG_FILE } from '@/constants';
import { appWindow } from '@tauri-apps/api/window';
import { message } from 'antd';

function OpenProject(): void;
function OpenProject(path: string): void;
function OpenProject(config: ProjectConfigType): void;

async function OpenProject(param: string | ProjectConfigType | undefined = undefined): Promise<void> {
  if (typeof param === 'object') {
    ProjectState.config = param;
  }
  if (typeof param === 'string') {
    // read file by tauri api
    try {
      const file = await readTextFile(`${param}/${PROJECT_CONFIG_FILE}`);
      const config = JSON.parse(file) as ProjectConfigType;
      ProjectState.config = config;
    } catch (e) {
      message.error('Failed to open project');
    }
  }
  await appWindow.setTitle(`${APPLICATION_NAME} - ${ProjectState.config.name}`);
  ProjectState.hasOpened = true;
}


export { OpenProject };
