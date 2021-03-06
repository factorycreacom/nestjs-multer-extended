import { MulterExtendedS3Options } from './interfaces';
import { MulterConfigLoader } from './multer-config.loader';
export declare const createMulterOptionsFactory: {
    provide: string;
    useFactory: (loader: MulterConfigLoader) => Promise<import("@nestjs/platform-express/multer/interfaces/multer-options.interface").MulterOptions>;
    inject: (typeof MulterConfigLoader)[];
};
export declare function createMulterExtendedProviders(options: MulterExtendedS3Options): ({
    provide: string;
    useFactory: (loader: MulterConfigLoader) => Promise<import("@nestjs/platform-express/multer/interfaces/multer-options.interface").MulterOptions>;
    inject: (typeof MulterConfigLoader)[];
} | {
    provide: string;
    useValue: any;
})[];
