import { proxy } from '@umijs/max';


type ProjecStateType = {
  hasOpened: boolean;
  config: ProjectConfigType;
}


const ProjectState: ProjecStateType = proxy({
  hasOpened: false,
  config: {
    name: '',
    path: '',
    python: {
      interpreter: '',
    },
  },
});

export { ProjectState };