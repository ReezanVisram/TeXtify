export interface Section_t {
    subheading: string
    latex: string[]
}

export interface Document_t {
    title: string
    sections: Section_t[]
}
