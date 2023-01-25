const School: { 
    name: string, 
    readonly foundingYear: number, 
    readonly totalStudents: number 
    studentsPerHouse: (totalStudents: number) => number ; 
} = { 
    name: 'SSS' , 
    foundingYear: 1990 , 
    totalStudents: 600, 
    studentsPerHouse: function(houses) { 
        return this.totalStudents / houses + ; 
    }
}
