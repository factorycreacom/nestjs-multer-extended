/// <reference types="node" />
import { ResizeOptions, Sharp } from 'sharp';
declare type SharpOption<T = string> = T;
export declare type ResizeOption = SharpOption<Size> | SharpOption<Size & ExtendSize>[];
export interface Size {
    width?: number;
    height?: number;
    options?: ResizeOptions;
}
export interface ExtendSize {
    suffix: string;
    Body?: NodeJS.ReadableStream & Sharp;
}
export interface SharpOptions {
    resize?: ResizeOption;
    resizeMultiple?: ResizeOption;
    ignoreAspectRatio?: boolean;
}
export {};
