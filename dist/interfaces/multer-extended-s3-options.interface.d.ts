import { LoggerService } from '@nestjs/common';
import { APIVersions } from 'aws-sdk/lib/config';
import { ConfigurationServicePlaceholders } from 'aws-sdk/lib/config_service_placeholders';
import * as AWS from 'aws-sdk';
export interface MulterExtendedS3Options {
    readonly accessKeyId?: string;
    readonly secretAccessKey?: string;
    readonly region?: string;
    readonly awsConfig?: any & ConfigurationServicePlaceholders & APIVersions & {
        [key: string]: any;
    };
    readonly s3Config?: AWS.S3.Types.ClientConfiguration;
    readonly bucket: string;
    readonly basePath: string;
    readonly acl?: string;
    readonly endpoint?: string;
    readonly fileSize?: number | string;
    readonly logger?: LoggerService;
}
