// Auto-import all images from this folder using webpack's require.context
const images = {};

function importAll(r) {
    r.keys().forEach((key) => {
        const name = key.replace('./', '').replace(/\.(png|jpe?g|svg|webp)$/, '');
        images[name] = r(key).default || r(key);
    });
}

try {
    importAll(require.context('./', false, /\.(png|jpe?g|svg|webp)$/));
} catch (e) {
    // require.context may fail in non-webpack environments — fail silently
}

export default images;
