import React, { useState } from 'react';
import { Form, Input, Button, message, FormProps } from 'antd';
import { open } from '@tauri-apps/api/dialog';
import WizardFun from '@/components/TabPages/Wizard/funtion';
import { useModel } from '@umijs/max';
import { OpenProject } from '@/managers/project';

export default function Wizard() {

  const { addTab, closeCurrentTab } = useModel('tabs');

  const [form] = Form.useForm();
  const [projectPath, setProjectPath] = useState<string>('');
  const [pythonPath, setPythonPath] = useState<string>('');

  const handleSelectPath = async () => {
    const selectedPath = await open({
      directory: true,
      multiple: false,
    });
    if (typeof selectedPath === 'string') {
      setProjectPath(selectedPath);
      form.setFieldValue('projectPath', selectedPath);
    }
  };

  const handleSelectPythonPath = async () => {
    const selectedPath = await open({
      filters: [{ name: 'Python Executable', extensions: ['exe', 'bin'] }],
      multiple: false,
    });
    if (typeof selectedPath === 'string') {
      setPythonPath(selectedPath);
      form.setFieldValue('pythonInterpreter', selectedPath);
    }
  };

  const handleFinish: FormProps<{
    projectName: string;
    pythonInterpreter: string;
    projectPath: string;
  }>['onFinish'] = async (values: any) => {

    const config = {
      projectName: values.projectName,
      pythonInterpreter: values.pythonInterpreter || '',
      projectPath: values.projectPath,
    };

    const res = await WizardFun.initProjectFiles({
      name: config.projectName,
      path: config.projectPath,
      pythonInterpreter: config.pythonInterpreter,
    });

    if (res.code === 1) {
      message.error(res.msg);
      return;
    }

    closeCurrentTab();
    addTab({
      kind: 'project_config',
      title: `${(res.data as ProjectConfigType).name} Dashboard`,
      param: res.data,
    });

    OpenProject((res.data as ProjectConfigType));

  };

  return (
    <div className="p-8">
      <Form form={form} layout="vertical" onFinish={handleFinish}>
        <Form.Item
          label="Name"
          name="projectName"
          rules={[{ required: true, message: 'please input project name' }]}
        >
          <Input placeholder="please input project name" />
        </Form.Item>

        <Form.Item
          label="Python Interpreter (optional)"
          name="pythonInterpreter"
        >
          <Input placeholder="please input python interpreter"
                 value={pythonPath}
                 readOnly
                 onClick={handleSelectPythonPath}
          />
        </Form.Item>

        <Form.Item
          label="Project Path"
          name="projectPath"
          rules={[{ required: true, message: 'please select project path' }]}
        >
          <Input
            placeholder="please select project path"
            value={projectPath}
            readOnly
            onClick={handleSelectPath}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}