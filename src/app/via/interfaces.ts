
export interface Key {
    firstByte: number
    secondByte: number
}

export interface Keymap {
    number: number
    keys: Array<Key>
}

export interface Loading {
    layersPorcent: number
}

export interface Error {
    textInfo: string
    readed: boolean
}

export interface Layout {
    name: string
    keymap: Array<Array<number | Object>>
    matrix: Array<Array<number> | null>
    rows?: number
    cols?: number
}

export interface MinMax {
    min: number
    max: number
}

export interface Backlight {
    brightness: MinMax,
    effect: Array<number>
}

export interface LightColor {
    hue: MinMax
    sat: MinMax
}

export interface LightEffect {
    label: string,
    value: number
}

export interface Rgblight {
    brightness: MinMax
    effect: LightEffect[]
    effectSpeed: Array<number>
    color: LightColor
}

export interface Lighting {
    backlight?: Backlight
    rgblight?: Rgblight
}

export interface BacklightValues {
    brightness: number
    effect: number
}

export interface RgblightValues {
    brightness: number
    effect: number
    effectSpeed: number
    color: {
        hue: number
        sat: number
    }
}

export interface LightValues {
    backlight?: BacklightValues,
    rgblight?: RgblightValues
}

export interface Keymapper {
    u: number
    s?: string
    f?: boolean
    firstByte?: number
    secondByte?: number
    code?: string
    layout?: string // Layout name
    layer?: number // Layer number
    row?: number // Matrix row
    col?: number // Matrix col
    saving?: boolean
}

export interface Layermapper {
    number: number
    keymap: Array<Keymapper[]>
}

export interface Layoutmapper {
    name: string
    layers: Layermapper[]
}

