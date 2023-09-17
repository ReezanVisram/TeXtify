export interface Section_t {
    index: number
    subheading: string
    latex: string[]
}

export interface Document_t {
    title: string
    sections: Section_t[]
}
