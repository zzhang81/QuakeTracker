import { exists, writeTextFile } from '@tauri-apps/api/fs';
import { Result } from '@/typing/global.typing';
import { PROJECT_CONFIG_FILE } from '@/constants';

type InitProjectFilesParams = {
  name: string;
  path: string;
  pythonInterpreter: string;
}

const WizardFun = {
  initProjectFiles: async (param: InitProjectFilesParams): Promise<Result<string | ProjectConfigType>> => {
    if (await exists(`${param.path}/${PROJECT_CONFIG_FILE}`)) {
      return {
        code: 1,
        msg: 'Project config file already exists',
        data: '',
      };
    }
    const projectConfig: ProjectConfigType = {
      name: param.name,
      path: param.path,
      python: {
        interpreter: param.pythonInterpreter,
      },
    };
    await writeTextFile(`${param.path}/${PROJECT_CONFIG_FILE}`, JSON.stringify(projectConfig, null, 2));
    return {
      code: 0,
      msg: 'success',
      data: projectConfig,
    };
  },
};
export default WizardFun;