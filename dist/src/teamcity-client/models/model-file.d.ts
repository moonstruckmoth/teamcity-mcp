import type { Files } from './files';
import type { Href } from './href';
export interface ModelFile {
    name?: string;
    fullName?: string;
    size?: number;
    modificationTime?: string;
    href?: string;
    parent?: ModelFile;
    content?: Href;
    children?: Files;
}
//# sourceMappingURL=model-file.d.ts.map