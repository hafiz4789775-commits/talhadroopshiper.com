/**
 * Place your exported model at `public/models/Shop.glb` (recommended single-file glTF).
 * For JSON `.gltf` + `.bin`, change this to `/models/Shop.gltf` and keep assets beside it in `public/models/`.
 *
 * Avoid double extensions like `Shop.glb.glb` — the file must be reachable at exactly `/models/Shop.glb`.
 */
export const SHOP_MODEL_URL = '/models/Shop.glb' as const

/** Premium hero / OG illustration (served from `public/storefront-hero.svg`). */
export const STOREFRONT_HERO_IMAGE = '/storefront-hero.svg' as const
