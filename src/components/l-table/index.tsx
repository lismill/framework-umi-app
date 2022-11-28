import { Button, Col, Divider, Form, Input, Row, Space, Table, Tabs } from 'antd';
import React, { useState } from 'react';

const LTable: React.FC<{
  /** 默认配置 */
  config: any;
  /** 更新数据 */
  setConfig: any;
  /** 操作按钮 */
  handleOperate: any;
  /** 自定义顶部插槽 */
  top?: any;
  /** 自定义中间插槽 */
  center?: any;
  /** 自定义底部插槽 */
  bottom?: any;
}> = (props) => {
  const [config, setConfig] = useState(props.config);
  const update = () => {
    setConfig({ ...config });
    props.setConfig({ ...config });
  };
  const [form] = Form.useForm();

  return (
    <div className="custom-section">
      {/* 标题 */}
      {props.config?.title && <h3 className="title">{config.title}</h3>}

      {/* 自定义顶部插槽 */}
      {props.top}

      {/* 搜索 */}
      {config.search && (
        <Form
          className="mt-[28px]"
          form={form}
          labelCol={{ span: 5 }}
          onFinish={(values) => {
            console.log('Finish:', values);
          }}
        >
          <Row>
            {config.search.items?.length &&
              config.search.items.map(
                (item: {
                  type: string;
                  label: string;
                  name: string;
                  rules?: any;
                  others?: any;
                }) => {
                  return (
                    <>
                      {/* input */}
                      {[undefined, 'input'].includes(item.type) && (
                        <Col span={8}>
                          <Form.Item
                            label={item.label}
                            name={item.name}
                            rules={item.rules}
                            {...item.others}
                          >
                            <Input
                              placeholder={`请输入${item.label}`}
                              allowClear
                              {...item.others}
                            />
                          </Form.Item>
                        </Col>
                      )}
                    </>
                  );
                },
              )}
            <Col span={8}>
              <Form.Item>
                <Button className="mr-8">重置</Button>
                <Button type="primary">查询</Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      )}

      {/* 状态栏 */}
      {config.tabs && (
        <Tabs
          defaultActiveKey={config.search?.data?.status ?? config.tabs[0].key}
          items={config.tabs.map(
            (tab: { label: JSX.Element; name: string; total: string | number }) => {
              if (tab.total) {
                return {
                  ...tab,
                  label: (
                    <div>
                      {tab.label}(<span className="text-red-600">{tab.total}</span>)
                    </div>
                  ),
                };
              }
              return tab;
            },
          )}
          onTabClick={(key: string) => {
            props.handleOperate('搜索', config.search.data);
            Object.assign(config.search.data, {}, { ...config.search.data, status: key });
            update();
          }}
        />
      )}

      {/* 操作 */}
      <Row className="flex justify-between items-center mb-[16px]">
        <Row className="flex items-center">
          <Space>
            <Button className="text-xs text-gray-600" size="small">
              批量启用
            </Button>
            <Button className="text-xs text-gray-600" size="small">
              批量禁用
            </Button>
            <Divider type="vertical" />
            <Button className="text-xs text-gray-600" type="primary" danger size="small">
              批量删除
            </Button>
          </Space>
        </Row>
        <Row>
          <Button type="primary">新建内容</Button>
        </Row>
      </Row>

      {/* 自定义中间插槽 */}
      {props.center}

      {/* 表格 */}
      <Table
        dataSource={config.table.dataSource}
        columns={config.table.columns.map((column: any) => {
          // 文本类型
          if ([undefined, 'text', 'slot'].includes(column.type)) {
            return column;
          } else {
            // 操作列
            return {
              ...column,
              render: (_: any, record: any) => {
                return (
                  <>
                    {(column?.values ?? []).map((v: any) => {
                      if (v.if(record)) {
                        return (
                          <a key={v.key} onClick={() => props.handleOperate(v.key, record)}>
                            <Divider type="vertical" />
                            {v.title}
                          </a>
                        );
                      }
                    })}
                  </>
                );
              },
            };
          }
        })}
      />

      {/* 自定义底部插槽 */}
      {props.bottom}
    </div>
  );
};

export default LTable;
