import { Type, NestInterceptor } from '@nestjs/common';
import { MulterExtendedOptions } from '../interfaces';
export declare function AmazonS3FileInterceptor(fieldName: string, localOptions?: MulterExtendedOptions): Type<NestInterceptor>;
