import { S3StorageOptions } from './interfaces/s3-storage.interface';
import { MulterSharp } from './multer-sharp';
export declare const AmazonS3Storage: (options: S3StorageOptions) => MulterSharp;
