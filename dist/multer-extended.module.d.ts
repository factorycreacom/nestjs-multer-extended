import { DynamicModule } from '@nestjs/common';
import { MulterExtendedS3Options, MulterExtendedS3AsyncOptions } from './interfaces';
export declare class MulterExtendedModule {
    static register(options: MulterExtendedS3Options): DynamicModule;
    static registerAsync(options: MulterExtendedS3AsyncOptions): DynamicModule;
    private static createProviders;
    private static createOptionsProvider;
}
