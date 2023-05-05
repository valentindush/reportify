export type Blueprint = {
    title: string, 
    logo: File,
    courseCategories: CourseCategory[],

}

export type CourseCategory = {
    name: string,
    courses: Course[]
}

export type Course = {
    name: string,
    CAT: number,
    EX: number,
    total: number
}
