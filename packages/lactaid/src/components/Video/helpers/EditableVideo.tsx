// This file is not used yet as I commented out editable video in tokens.

import React, {
  HTMLProps,
  ComponentType,
} from 'react';
import flow from 'lodash/flow';
import { withFieldApi } from 'informed';
import {
  getUI,
  asBodilessComponent,
  BodilessOptions,
  AsBodiless,
} from '@bodiless/core';
import { FileUpload, FileUploadPickerUI } from '@bodiless/components';
import {
  addProps,
} from '@bodiless/fclasses';

// Type of the data used by this component.
export type Data = {
  src: string;
};

export type TVideoPickerUI = FileUploadPickerUI;

// DropZonePlugin control the upload of file and only saves jpg/png files.
export const DropZonePlugin = flow(
  addProps({
    accept: 'video/webm, video/mp4',
  }),
)(FileUpload);

// Type of the props accepted by this component.
// Exclude the src and alt from the props accepted as we write it.
type VideoProps = HTMLProps<HTMLVideoElement>;
type Props = VideoProps & { ui?: TVideoPickerUI};

const VideoDropZonePlugin: ComponentType<{ ui?: Partial<TVideoPickerUI> }> = withFieldApi('src')(DropZonePlugin);

// Options used to create an edit button.
const options: BodilessOptions<Props, Data> = {
  icon: 'image',
  label: 'Select',
  groupLabel: 'Video',
  formTitle: 'Video',
  name: 'Video',
  renderForm: ({ ui: formUi, componentProps }) => {
    const { ui: videoPickerUI } = componentProps;
    const { ComponentFormLabel, ComponentFormText } = getUI(formUi);
    return (
      <>
        <ComponentFormLabel htmlFor="video-src">Src</ComponentFormLabel>
        <ComponentFormText field="src" id="video-src" />
        <VideoDropZonePlugin ui={videoPickerUI} />
      </>
    );
  },
  global: false,
  local: true,
};

// export const withVideoPlaceholder = withPropsFromPlaceholder(['src']);
export type AsBodilessVideo = AsBodiless<VideoProps, Data>;

export const asBodilessVideo: AsBodilessVideo = asBodilessComponent(options);
export type ImageToken = ReturnType<AsBodilessVideo>;

const Video = asBodilessVideo()('video');

export default Video;
