#!/usr/bin/env node

import path from 'path';
import { parse, ComponentDoc } from 'vue-docgen-api';
import { globSync } from 'glob';

interface ComponentInfo {
  name: string;
  props: ComponentDoc['props'];
  slots: ComponentDoc['slots'];
  events: ComponentDoc['events'];
}

/**
 * Extract component information from Vue files
 * @returns {Promise<ComponentInfo[]>} - Array of component information
 */
export const extractComponentInfo = async (dir: string): Promise<ComponentInfo[]> => {
  const componentFiles: string[] = globSync(`${dir}/**/B*.vue`);
  const componentsInfo: ComponentInfo[] = [];

  for (const filePath of componentFiles) {
    const componentName: string = path.basename(filePath, '.vue');
    const info: ComponentDoc = await parse(filePath);
    componentsInfo.push({
      name: componentName,
      props: info.props,
      slots: info.slots,
      events: info.events,
    });
  }
  componentsInfo.sort((a, b) => a.name.localeCompare(b.name));

  return componentsInfo;
}

export type { ComponentInfo };
