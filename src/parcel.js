// import {Namer} from '@parcel/plugin';
// import path from 'path';

// export default new Namer({
//   name({bundle}) {
//     if (bundle.type === 'png' || bundle.type === 'jpg' || bundle.type === 'svg') {
//       let filePath = bundle.getMainEntry().filePath;
//       return `images/${path.basename(filePath)}`;
//     }

//     if (bundle.type === 'css' ) {
//       let filePath = bundle.getMainEntry().filePath;
//       return `css/${path.basename(filePath)}`;
//     }

//     if (bundle.type === 'js' ) {
//       let filePath = bundle.getMainEntry().filePath;
//       return `js/${path.basename(filePath)}`;
//     }    

//     // Allow the next namer to handle this bundle.
//     return null;
//   }
// });