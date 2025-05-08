import logo from './Logo.png'
import logo_1_white from './logo_1_white.png'
import logo_1 from './logo-1.0.png'
import logo_dark from './logo_dark.svg'
import search_icon from './search_icon.svg'
import cross_icon from './cross_icon.svg'
import upload_area from './upload_area.svg'
import sketch from './sktech.svg'
import microsoft_logo from './microsoft_logo.svg'
import walmart_logo from './walmart_logo.svg'
import accenture_logo from './accenture_logo.svg'
import adobe_logo from './adobe_logo.svg'
import paypal_logo from './paypal_logo.svg'
import course_1_thumbnail from './course_1.png'
import course_2_thumbnail from './course_2.png'
import course_3_thumbnail from './course_3.png'
import course_4_thumbnail from './course_4.png'
import star from './rating_star.svg'
import star_blank from './star_dull_icon.svg'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import profile_img_3 from './profile_img_3.png'
import arrow_icon from './arrow_icon.svg'
import down_arrow_icon from './down_arrow_icon.svg'
import time_left_clock_icon from './time_left_clock_icon.svg'
import time_clock_icon from './time_clock_icon.svg'
import user_icon from './user_icon.svg'
import home_icon from './home_icon.svg'
import add_icon from './add_icon.svg'
import my_course_icon from './my_course_icon.svg'
import person_tick_icon from './person_tick_icon.svg'
import facebook_icon from './facebook_icon.svg'
import instagram_icon from './instagram_icon.svg'
import twitter_icon from './twitter_icon.svg'
import file_upload_icon from './file_upload_icon.svg'
import appointments_icon from './appointments_icon.svg'
import earning_icon from './earning_icon.svg'
import dropdown_icon from './dropdown_icon.svg'
import patients_icon from './patients_icon.svg'
import play_icon from './play_icon.svg'
import blue_tick_icon from './blue_tick_icon.svg'
import course_4 from './course_4.png'
import profile_img from './profile_img.png'
import profile_img2 from './profile_img2.png'
import profile_img3 from './profile_img3.png'
import lesson_icon from './lesson_icon.svg'
import jayy_parmar from './jayyparmar.png'
import menu from './menu.svg'
import close from './close.svg'
export const assets = {
    jayy_parmar,
    close,
    menu,
    logo_1_white,
    logo_1 ,
    logo,
    search_icon,
    sketch,
    microsoft_logo,
    walmart_logo,
    accenture_logo,
    adobe_logo,
    paypal_logo,
    course_1_thumbnail,
    course_2_thumbnail,
    course_3_thumbnail,
    course_4_thumbnail,
    star,
    star_blank,
    profile_img_1,
    profile_img_2,
    profile_img_3,
    arrow_icon,
    dropdown_icon,
    cross_icon,
    upload_area,
    logo_dark,
    down_arrow_icon,
    time_left_clock_icon,
    time_clock_icon,
    user_icon,
    home_icon,
    add_icon,
    my_course_icon,
    person_tick_icon,
    facebook_icon,
    instagram_icon,
    twitter_icon,
    course_4,
    file_upload_icon,
    appointments_icon,
    earning_icon,
    patients_icon,
    profile_img,
    profile_img2,
    profile_img3,
    play_icon,
    blue_tick_icon,
    lesson_icon
}

export const dummyEducatorData = {
    "_id": "675ac1512100b91a6d9b8b24",
    "name": "GreatStack",
    "email": "user.greatstack@gmail.com",
    "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yclFkaDBOMmFqWnBoTTRBOXZUanZxVlo0aXYifQ",
    "createdAt": "2024-12-12T10:56:17.930Z",
    "updatedAt": "2024-12-12T10:56:17.930Z",
    "__v": 0
}
export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '/',
    },
    {
      id: 2,
      name: 'About Us',
      href: '/about',
    },
    {
      id: 3,
      name: 'Courses',
      href: '/course-list',
    },
  ];
export const dummyTestimonial = [
    {
        name: 'Donald Jackman',
        role: 'SWE 1 @ Amazon',
        image: assets.profile_img_1,
        rating: 5,
        feedback: 'I\'ve been using Imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.',
    },
    {
        name: 'Richard Nelson',
        role: 'SWE 2 @ Samsung',
        image: assets.profile_img_2,
        rating: 4,
        feedback: 'I\'ve been using Imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.',
    },
    {
        name: 'James Washington',
        role: 'SWE 2 @ Google',
        image: assets.profile_img_3,
        rating: 4.5,
        feedback: 'I\'ve been using Imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.',
    },
];

export const dummyDashboardData = {
    "totalEarnings": 707.38,
    "enrolledStudentsData": [
        {
            "courseTitle": "Introduction to JavaScript",
            "student": {
                "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
                "name": "Great Stack",
                "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
            }
        },
        {
            "courseTitle": "Advanced Python Programming",
            "student": {
                "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
                "name": "Great Stack",
                "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
            }
        },
        {
            "courseTitle": "Web Development Bootcamp",
            "student": {
                "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
                "name": "Great Stack",
                "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
            }
        },
        {
            "courseTitle": "Data Science with Python",
            "student": {
                "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
                "name": "Great Stack",
                "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
            }
        },
        {
            "courseTitle": "Cybersecurity Basics",
            "student": {
                "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
                "name": "Great Stack",
                "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
            }
        }
    ],
    "totalCourses": 8
}

export const dummyStudentEnrolled = [
    {
        "student": {
            "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "name": "GreatStack",
            "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
        },
        "courseTitle": "Introduction to JavaScript",
        "purchaseDate": "2024-12-20T08:39:55.509Z"
    },
    {
        "student": {
            "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "name": "GreatStack",
            "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
        },
        "courseTitle": "Introduction to JavaScript",
        "purchaseDate": "2024-12-20T08:59:49.964Z"
    },
    {
        "student": {
            "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "name": "GreatStack",
            "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
        },
        "courseTitle": "Advanced Python Programming",
        "purchaseDate": "2024-12-20T11:03:42.931Z"
    },
    {
        "student": {
            "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "name": "GreatStack",
            "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
        },
        "courseTitle": "Web Development Bootcamp",
        "purchaseDate": "2024-12-20T11:04:48.798Z"
    }
]

export const dummyCourses = [
    {
        "_id": "605c72efb3f1c2b1f8e4e1a1",
        "courseTitle": "Java Script Web Development",
        "courseDescription": "<h2>Learn the Basics of JavaScript</h2><p>JavaScript is a versatile programming language that powers the web. In this course, you will learn the fundamentals of JavaScript, including syntax, data types, and control structures.</p><p>This course is perfect for beginners who want to start their journey in web development. By the end of this course, you will be able to create interactive web pages and understand the core concepts of JavaScript.</p><ul><li>Understand the basics of programming</li><li>Learn how to manipulate the DOM</li><li>Create dynamic web applications</li></ul>",
        "coursePrice": 6110,
        "isPublished": true,
        "discount": 10,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "Getting Started with JavaScript",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": "Overview of JavaScript and its role in web development.",
                        "lectureDuration": 16,
                        "lectureUrl": "https://www.youtube.com/MwUBAFoY7CE",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Setting Up Your Environment",
                        "lectureDuration": 19,
                        "lectureUrl": "https://www.youtube.com/MwUBAFoY7CE",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                    ,
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": " Understanding the JavaScript execution context.",
                        "lectureDuration": 19,
                        "lectureUrl": "https://www.youtube.com/MwUBAFoY7CE",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Variables and Data Types",
                "chapterContent": [
                    {
                        "lectureId": "lecture5",
                        "lectureTitle": "Understanding Variables",
                        "lectureDuration": 20,
                        "lectureUrl": "https://youtu.be/pZQeBJsGoDQ",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture6",
                        "lectureTitle": " Control structures (if statements, loops).",
                        "lectureDuration": 10,
                        "lectureUrl": "https://youtu.be/ufHT2WEkkC4",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                    ,
                    {
                        "lectureId": "lecture7",
                        "lectureTitle": "Working on Functions and Scope",
                        "lectureDuration": 10,
                        "lectureUrl": "https://youtu.be/ufHT2WEkkC4",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
            ,
            {
                "chapterId": "chapter3",
                "chapterOrder": 2,
                "chapterTitle": "Document Object Model (DOM)",
                "chapterContent": [
                    {
                        "lectureId": "lecture8",
                        "lectureTitle": "Introduction to the DOM and its structure",
                        "lectureDuration": 20,
                        "lectureUrl": "https://youtu.be/pZQeBJsGoDQ",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture6",
                        "lectureTitle": "Accessing and manipulating HTML elements",
                        "lectureDuration": 10,
                        "lectureUrl": "https://youtu.be/ufHT2WEkkC4",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                    ,
                    {
                        "lectureId": "lecture7",
                        "lectureTitle": "Handling events and interactions",
                        "lectureDuration": 10,
                        "lectureUrl": "https://youtu.be/ufHT2WEkkC4",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
            ,
            {
                "chapterId": "chapter3",
                "chapterOrder": 2,
                "chapterTitle": "JavaScript Objects and Functions",
                "chapterContent": [
                    {
                        "lectureId": "lecture8",
                        "lectureTitle": " Working with objects and methods",
                        "lectureDuration": 20,
                        "lectureUrl": "https://youtu.be/pZQeBJsGoDQ",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture6",
                        "lectureTitle": "Creating and using functions.",
                        "lectureDuration": 10,
                        "lectureUrl": "https://youtu.be/ufHT2WEkkC4",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                    ,
                    {
                        "lectureId": "lecture7",
                        "lectureTitle": "Closures, callbacks, and anonymous functions.",
                        "lectureDuration": 10,
                        "lectureUrl": "https://youtu.be/ufHT2WEkkC4",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
            ,
            {
                "chapterId": "chapter3",
                "chapterOrder": 2,
                "chapterTitle": " Asynchronous JavaScript",
                "chapterContent": [
                    {
                        "lectureId": "lecture8",
                        "lectureTitle": "Understanding asynchronous programming",
                        "lectureDuration": 20,
                        "lectureUrl": "https://youtu.be/pZQeBJsGoDQ",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture6",
                        "lectureTitle": "Working with callbacks, promises, and async/await.",
                        "lectureDuration": 10,
                        "lectureUrl": "https://youtu.be/ufHT2WEkkC4",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                    ,
                    {
                        "lectureId": "lecture7",
                        "lectureTitle": "Making AJAX requests with JavaScript",
                        "lectureDuration": 10,
                        "lectureUrl": "https://youtu.be/ufHT2WEkkC4",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
            ,
            {
                "chapterId": "chapter3",
                "chapterOrder": 2,
                "chapterTitle": "  Error Handling and Debugging",
                "chapterContent": [
                    {
                        "lectureId": "lecture8",
                        "lectureTitle": "Identifying and handling JavaScript errors.",
                        "lectureDuration": 20,
                        "lectureUrl": "https://youtu.be/pZQeBJsGoDQ",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture6",
                        "lectureTitle": "Debugging techniques and tools",
                        "lectureDuration": 10,
                        "lectureUrl": "https://youtu.be/ufHT2WEkkC4",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                    ,
                    {
                        "lectureId": "lecture7",
                        "lectureTitle": "Error handling and graceful degradation",
                        "lectureDuration": 10,
                        "lectureUrl": "https://youtu.be/ufHT2WEkkC4",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
            
        ],
        "educator": "675ac1512100b91a6d9b8b24",
        "enrolledStudents": [
            "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "user_2qjlgkAqIMpiR2flWIRzvWKtE0w"
        ],
        "courseRatings": [
            {
                "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
                "rating": 5,
                "_id": "6773e37360cb0ab974342314"
            }
        ],
        "createdAt": "2024-12-17T08:16:53.622Z",
        "updatedAt": "2025-01-02T04:47:44.701Z",
        "__v": 4,
        "courseThumbnail": "https://img.youtube.com/vi/CBWnBi-awSA/maxresdefault.jpg"
    },
    {
        "_id": "675ac1512100b91a6d9b8b24",
        "courseTitle": "Python Programming",
        "courseDescription": "<h2>Deep Dive into Python Programming</h2><p>This course is designed for those who have a basic understanding of Python and want to take their skills to the next level. You will explore advanced topics such as decorators, generators, and context managers.</p><p>By the end of this course, you will be able to write efficient and clean Python code, and understand how to leverage Python's powerful features for real-world applications.</p><ul><li>Master advanced data structures</li><li>Implement object-oriented programming concepts</li><li>Work with libraries and frameworks</li></ul>",
        "coursePrice": 9444,
        "isPublished": true,
        "discount": 10,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": " Introduction to Python",
                "chapterContent": [
                    {
                        "lectureId": " lecture1",
                        "lectureTitle": "An overview of Python and its importance in the programming world",
                        "lectureDuration": 720,
                        "lectureUrl": "https://www.youtube.com/xmMo-qBaK-g",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Setting up a Python development environment",
                        "lectureDuration": 850,
                        "lectureUrl": "https://www.youtube.com/xmMo-qBaK-g",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                    ,
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Writing and running Python programs",
                        "lectureDuration": 850,
                        "lectureUrl": "https://www.youtube.com/xmMo-qBaK-g",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "Variables, Data Types, and Operators",
                "chapterContent": [
                    {
                        "lectureId": " lecture1",
                        "lectureTitle": "Variables and data storage in Python",
                        "lectureDuration": 720,
                        "lectureUrl": "https://www.youtube.com/xmMo-qBaK-g",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": " Data types (integers, floats, strings, and more)",
                        "lectureDuration": 850,
                        "lectureUrl": "https://www.youtube.com/xmMo-qBaK-g",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                    ,
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Operators for arithmetic, comparison, and logical operations.",
                        "lectureDuration": 850,
                        "lectureUrl": "https://www.youtube.com/xmMo-qBaK-g",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Control Structure",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Conditional Statements(if ,else , elif)",
                        "lectureDuration": 900,
                        "lectureUrl": "https://youtu.be/HdLIMoQkXFA",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Loops (for and while)",
                        "lectureDuration": 950,
                        "lectureUrl": "https://youtu.be/HdLIMoQkXFA",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                    ,
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Loops Control (Break and Continue).",
                        "lectureDuration": 850,
                        "lectureUrl": "https://www.youtube.com/xmMo-qBaK-g",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
            ,
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Funtion and Modules",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Creating and using functions in Python",
                        "lectureDuration": 900,
                        "lectureUrl": "https://youtu.be/HdLIMoQkXFA",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Function parameters and return values",
                        "lectureDuration": 950,
                        "lectureUrl": "https://youtu.be/HdLIMoQkXFA",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                    ,
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Importing and using modules.",
                        "lectureDuration": 850,
                        "lectureUrl": "https://www.youtube.com/xmMo-qBaK-g",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
            ,
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "DataStructure",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Lists, tuples, and dictionaries.",
                        "lectureDuration": 900,
                        "lectureUrl": "https://youtu.be/HdLIMoQkXFA",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "List comprehensions",
                        "lectureDuration": 950,
                        "lectureUrl": "https://youtu.be/HdLIMoQkXFA",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                    ,
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Loops Control (Break and Continue).",
                        "lectureDuration": 850,
                        "lectureUrl": "https://www.youtube.com/xmMo-qBaK-g",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
            ,
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "File Handling",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Reading and writing files in Python.",
                        "lectureDuration": 900,
                        "lectureUrl": "https://youtu.be/HdLIMoQkXFA",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Working with text and binary files",
                        "lectureDuration": 950,
                        "lectureUrl": "https://youtu.be/HdLIMoQkXFA",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                    ,
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Exception handling and file-related errors.",
                        "lectureDuration": 850,
                        "lectureUrl": "https://www.youtube.com/xmMo-qBaK-g",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
            ,
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Object-Oriented Programming (OOP)",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Introduction to OOP in Python.",
                        "lectureDuration": 900,
                        "lectureUrl": "https://youtu.be/HdLIMoQkXFA",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Classes, objects, and methods.",
                        "lectureDuration": 950,
                        "lectureUrl": "https://youtu.be/HdLIMoQkXFA",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                    ,
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Inheritance and polymorphism.",
                        "lectureDuration": 850,
                        "lectureUrl": "https://www.youtube.com/xmMo-qBaK-g",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
            ,
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Web Development with Python",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Introduction to web frameworks (e.g., Flask or Django).",
                        "lectureDuration": 900,
                        "lectureUrl": "https://youtu.be/HdLIMoQkXFA",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Building web applications with Python.",
                        "lectureDuration": 950,
                        "lectureUrl": "https://youtu.be/HdLIMoQkXFA",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                    ,
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": " Interaction with databases.",
                        "lectureDuration": 850,
                        "lectureUrl": "https://www.youtube.com/xmMo-qBaK-g",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b24",
        "enrolledStudents": [
            "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "user_2qjlgkAqIMpiR2flWIRzvWKtE0w"
        ],
        "courseRatings": [
            {
                "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
                "rating": 5,
                "_id": "6776369244daad0f313d81a9"
            }
        ],
        "createdAt": "2024-12-17T08:16:53.622Z",
        "updatedAt": "2025-01-02T06:47:54.446Z",
        "__v": 3,
        "courseThumbnail": "https://img.youtube.com/vi/HdLIMoQkXFA/maxresdefault.jpg"
    },
    {
        "_id": "605c72efb3f1c2b1f8e4e1ae",
        "courseTitle": "Ethical Hacking",
        "courseDescription": "<h2>Learn Ethical Hacking </h2><p>Cybersecurity is critical in today's digital age. This course introduces the fundamentals of cybersecurity, including threat analysis, ethical hacking, and secure programming practices.</p><p>By the end of this course, you will understand how to identify vulnerabilities and implement security measures effectively.</p><ul><li>Understand security protocols</li><li>Learn about encryption techniques</li><li>Conduct basic penetration testing</li></ul>",
        "coursePrice": 25882,
        "isPublished": true,
        "discount": 15,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "Introduction to Ethical Hacking",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": "Overview of ethical hacking and its importance in cybersecurity",
                        "lectureDuration": 10,
                        "lectureUrl": "https://youtu.be/samplelink5",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Legal and ethical considerations in hacking",
                        "lectureDuration": 18,
                        "lectureUrl": "https://youtu.be/samplelink6",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                    ,
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Differentiating between ethical and malicious hacking.",
                        "lectureDuration": 18,
                        "lectureUrl": "https://youtu.be/samplelink6",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Information Gathering and Footprinting",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Collecting information about a target",
                        "lectureDuration": 15,
                        "lectureUrl": "https://youtu.be/samplelink7",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": " Passive and active reconnaissance techniques.",
                        "lectureDuration": 20,
                        "lectureUrl": "https://youtu.be/samplelink8",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                    ,
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": " Tools for footprinting and information gathering",
                        "lectureDuration": 18,
                        "lectureUrl": "https://youtu.be/samplelink6",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
            ,
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": " Scanning and Enumeration",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": " Network scanning methods (e.g., port scanning, banner grabbing)",
                        "lectureDuration": 15,
                        "lectureUrl": "https://youtu.be/samplelink7",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": " Enumerating services and users.",
                        "lectureDuration": 20,
                        "lectureUrl": "https://youtu.be/samplelink8",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                    ,
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": " Vulnerability scanning.",
                        "lectureDuration": 18,
                        "lectureUrl": "https://youtu.be/samplelink6",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
            ,
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": " Exploitation and Post-Exploitation",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Vulnerability analysis and exploitation",
                        "lectureDuration": 15,
                        "lectureUrl": "https://youtu.be/samplelink7",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": " Gaining unauthorized access.",
                        "lectureDuration": 20,
                        "lectureUrl": "https://youtu.be/samplelink8",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                    ,
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": " Post-exploitation activities and maintaining access",
                        "lectureDuration": 18,
                        "lectureUrl": "https://youtu.be/samplelink6",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
            ,
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Web Application Hacking",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Identifying and exploiting web application vulnerabilities.",
                        "lectureDuration": 15,
                        "lectureUrl": "https://youtu.be/samplelink7",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": " Cross-Site Scripting (XSS), SQL injection, and more.",
                        "lectureDuration": 20,
                        "lectureUrl": "https://youtu.be/samplelink8",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                    ,
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": " Web application security best practices",
                        "lectureDuration": 18,
                        "lectureUrl": "https://youtu.be/samplelink6",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
            ,
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Wireless Network Hacking",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Wireless network security (WEP, WPA, WPA2).",
                        "lectureDuration": 15,
                        "lectureUrl": "https://youtu.be/samplelink7",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "  Wireless network attacks (e.g., WPS attacks)",
                        "lectureDuration": 20,
                        "lectureUrl": "https://youtu.be/samplelink8",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                    ,
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Securing wireless networks.",
                        "lectureDuration": 18,
                        "lectureUrl": "https://youtu.be/samplelink6",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
            ,
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Malware Analysis and Reverse Engineering",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Analyzing and reverse engineering malicious software",
                        "lectureDuration": 15,
                        "lectureUrl": "https://youtu.be/samplelink7",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": " Identifying malware behavior",
                        "lectureDuration": 20,
                        "lectureUrl": "https://youtu.be/samplelink8",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                    ,
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Developing countermeasures",
                        "lectureDuration": 18,
                        "lectureUrl": "https://youtu.be/samplelink6",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
            ,
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Ethical Hacking in Practice",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Real-world ethical hacking scenarios",
                        "lectureDuration": 15,
                        "lectureUrl": "https://youtu.be/samplelink7",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": " Reporting vulnerabilities and responsible disclosure.",
                        "lectureDuration": 20,
                        "lectureUrl": "https://youtu.be/samplelink8",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                    ,
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": " Preparing for ethical hacking certifications",
                        "lectureDuration": 18,
                        "lectureUrl": "https://youtu.be/samplelink6",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }

        ],
        "educator": "675ac1512100b91a6d9b8b24",
        "enrolledStudents": [
            "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "user_2qjlgkAqIMpiR2flWIRzvWKtE0w"
        ],
        "courseRatings": [],
        "createdAt": "2024-12-27T11:30:00.000Z",
        "updatedAt": "2024-12-31T04:14:49.773Z",
        "__v": 2,
        "courseThumbnail": "https://img.youtube.com/vi/2eLJNBroFrg/maxresdefault.jpg"
    },
    {
        "_id": "605c72efb3f1c2b1f8e4e1a7",
        "courseTitle": "React Js",
        "courseDescription": "<h2>Become a Full-Stack Web Developer</h2><p>This comprehensive bootcamp covers everything you need to know to become a React Js developer. From HTML and CSS to JavaScript and backend technologies, this course is designed to take you from beginner to job-ready.</p><p>Throughout the course, you will work on real-world projects, build a portfolio, and gain the skills necessary to succeed in the tech industry.</p><ul><li>Learn front-end and back-end development</li><li>Build responsive and dynamic web applications</li><li>Understand databases and server-side programming</li></ul>",
        "coursePrice": 16666.65,
        "isPublished": true,
        "discount": 25,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "Introduction to React.js",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": " Overview of React.js and its role in web development.",
                        "lectureDuration": 600,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Setting up a React.js development environment.",
                        "lectureDuration": 720,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                    ,
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Understanding components and the virtual DOM",
                        "lectureDuration": 720,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Creating and Rendering Components",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Building and rendering React components",
                        "lectureDuration": 800,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "JSX (JavaScript XML) and component structure",
                        "lectureDuration": 850,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Handling data and props",
                        "lectureDuration": 720,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
            ,
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "State Management and Lifecycle Methods",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Managing component state",
                        "lectureDuration": 800,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Component lifecycle methods.",
                        "lectureDuration": 850,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Handling events and user interactions.",
                        "lectureDuration": 720,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
            ,
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": " Routing and Navigation with React Router",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Introduction to React Router.",
                        "lectureDuration": 800,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Creating single-page applications with routing",
                        "lectureDuration": 850,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Nested routes and navigation.",
                        "lectureDuration": 720,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
            ,
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Working with Forms and User Input",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Building forms and controlled components",
                        "lectureDuration": 800,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Handling form submissions and validation.",
                        "lectureDuration": 850,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Implementing controlled and uncontrolled components.",
                        "lectureDuration": 720,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
            ,
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "State Management with Redux",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": " Introduction to state management with Redux.",
                        "lectureDuration": 800,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Actions, reducers, and the Redux store",
                        "lectureDuration": 850,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Connecting React components to the Redux store",
                        "lectureDuration": 720,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
            ,
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Consuming APIs and Data with Axios",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": " Making HTTP requests with Axios.",
                        "lectureDuration": 800,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Consuming RESTful APIs.",
                        "lectureDuration": 850,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Handling data and asynchronous operations.",
                        "lectureDuration": 720,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
            ,
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Building and Deploying React Applications",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": " Building and optimizing React applications.",
                        "lectureDuration": 800,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Deployment options and strategies.",
                        "lectureDuration": 850,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Debugging and performance optimization",
                        "lectureDuration": 720,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b24",
        "enrolledStudents": [
            "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "user_2qjlgkAqIMpiR2flWIRzvWKtE0w"
        ],
        "courseRatings": [],
        "createdAt": "2024-12-17T08:16:53.622Z",
        "updatedAt": "2024-12-31T05:31:27.290Z",
        "__v": 2,
        "courseThumbnail": "https://img.youtube.com/vi/CgkZ7MvWUAA/maxresdefault.jpg"
    },
    {
        "_id": "605c72efb3f1c2b1f8e4e1ac",
        "courseTitle": "HTML 5",
        "courseDescription": "<h2>Master HTML 5</h2><p>HTML5 is the latest iteration of the standard markup language for creating web pages. This course will provide you with a comprehensive understanding of HTML5 and its features, enabling you to create modern and interactive web content.</p><p>By the end of this course, you will understand cloud services, deployment models, and best practices for using cloud resources efficiently.</p><ul><li>Understand cloud architecture</li><li>Learn to work with AWS, Azure, and GCP</li><li>Explore serverless computing and storage solutions</li></ul>",
        "coursePrice":6875,
        "isPublished": true,
        "discount": 20,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "Introduction to HTML5",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": "Overview of HTML5 and its significance.",
                        "lectureDuration": 600,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "History of HTML and key changes in HTML5.",
                        "lectureDuration": 720,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                    ,
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Setting up a web development environment",
                        "lectureDuration": 720,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "HTML5 Semantic Elements",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Introduction to semantic elements (header, nav, article, section, etc.).",
                        "lectureDuration": 800,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Creating structured web documents.",
                        "lectureDuration": 850,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                    ,
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Accessibility and SEO benefits of semantic markup.",
                        "lectureDuration": 720,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
            ,
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Multimedia and Graphics",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Embedding audio and video elements.",
                        "lectureDuration": 800,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Working with the canvas element for drawing and animations.",
                        "lectureDuration": 850,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                    ,
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Implementing responsive images.",
                        "lectureDuration": 720,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
            ,
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Forms and Input Types",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Creating forms with new HTML5 form elements.",
                        "lectureDuration": 800,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": " Input types, attributes, and form validation.",
                        "lectureDuration": 850,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                    ,
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "HTML5 input attributes for better user experience.",
                        "lectureDuration": 720,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }  
            ,
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "HTML5 input attributes for better user experience.",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Geolocation and Web Storage",
                        "lectureDuration": 800,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": " Accessing geolocation information.",
                        "lectureDuration": 850,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                    ,
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Implementing web applications with offline support.",
                        "lectureDuration": 720,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
            ,
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": " CSS3 and Styling in HTML5",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Integration of CSS3 for advanced styling.",
                        "lectureDuration": 800,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Flexbox and grid layout for responsive design.",
                        "lectureDuration": 850,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                    ,
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": " Animations and transitions.",
                        "lectureDuration": 720,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
            ,
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Web APIs and Integration",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Integration of third-party APIs..",
                        "lectureDuration": 800,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Using JavaScript to interact with HTML5 features.",
                        "lectureDuration": 850,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                    ,
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": " Implementing drag and drop, file handling, and more.",
                        "lectureDuration": 720,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
            ,
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Mobile and Responsive Web Design",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Building responsive web pages with HTML5.",
                        "lectureDuration": 800,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Mobile-first design and media queries.",
                        "lectureDuration": 850,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                    ,
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Best practices for mobile web development.",
                        "lectureDuration": 720,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b24",
        "enrolledStudents": [
            "user_2qjlgkAqIMpiR2flWIRzvWKtE0w"
        ],
        "courseRatings": [],
        "createdAt": "2024-12-17T08:16:53.622Z",
        "updatedAt": "2024-12-31T05:32:55.357Z",
        "__v": 1,
        "courseThumbnail": "https://img.youtube.com/vi/DPnqb74Smug/maxresdefault.jpg"
    },
    {
        "_id": "605c72efb3f1c2b1f8e4e1ad",
        "courseTitle": "CSS",
        "courseDescription": "<h2>Master CSS</h2><p>CSS is a crucial technology for web design, enabling you to control the layout and visual presentation of web pages. This course will provide you with a comprehensive understanding of CSS and how to create attractive and responsive web designs.</p><p>By the end of this course, you will be equipped to work on real-world data projects and gain insights from data.</p><ul><li>Data cleaning and preprocessing</li><li>Exploratory Data Analysis (EDA)</li><li>Build predictive models</li></ul>",
        "coursePrice": 6875,
        "isPublished": true,
        "discount": 20,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": " Introduction to CSS",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": "Overview of CSS and its role in web development.",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/samplelink1",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Understanding the separation of content and style.",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink2",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                    ,
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Setting up a web development environment.",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink2",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "CSS Selectors and Properties",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "CSS selectors and their specificity.",
                        "lectureDuration": 20,
                        "lectureUrl": "https://youtu.be/samplelink3",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Applying CSS properties to HTML elements.",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink4",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                    ,
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": " Colors, fonts, text properties, and more.",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink2",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
            ,
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Box Model and Layout",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Understanding the CSS box model.",
                        "lectureDuration": 20,
                        "lectureUrl": "https://youtu.be/samplelink5",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Positioning elements with CSS.",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink6",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                    ,
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Flexbox and grid layout for responsive design.",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink2",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
            ,
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Positioning and Floats",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Positioning elements with CSS (static, relative, absolute, fixed).",
                        "lectureDuration": 20,
                        "lectureUrl": "https://youtu.be/samplelink7",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Floating elements and creating multi-column layouts.",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink8",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                    ,
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Clearing floats and managing layout challenges.",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink2",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
            ,
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "CSS Flexbox and Grid Layout",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Introduction to CSS Flexbox.",
                        "lectureDuration": 20,
                        "lectureUrl": "https://youtu.be/samplelink9",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Building flexible and responsive designs with Flexbox.",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink10",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                    ,
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "CSS Grid Layout for advanced grid-based designs.",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink2",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }   
            ,
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "CSS Transitions and Animations",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Implementing smooth transitions.",
                        "lectureDuration": 20,
                        "lectureUrl": "https://youtu.be/samplelink11",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": " Creating animations with CSS.",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink12",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                    ,
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": " Timing and easing functions.",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink2",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
            ,
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Responsive Web Design",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": " Principles of responsive design.",
                        "lectureDuration": 20,
                        "lectureUrl": "https://youtu.be/samplelink11",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Media queries and breakpoints.",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink12",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                    ,
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Building responsive navigation menus.",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink2",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
            ,
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "CSS Transitions and Animations",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Implementing smooth transitions.",
                        "lectureDuration": 20,
                        "lectureUrl": "https://youtu.be/samplelink11",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": " Creating animations with CSS.",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink12",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                    ,
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": " Timing and easing functions.",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink2",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b24",
        "enrolledStudents": [
            "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
            "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "user_2qjlgkAqIMpiR2flWIRzvWKtE0w"
        ],
        "courseRatings": [
            {
                "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
                "rating": 5,
                "_id": "6773acf160cb0ab974342248"
            }
        ],
        "createdAt": "2024-12-27T10:00:00.000Z",
        "updatedAt": "2024-12-31T09:57:48.992Z",
        "__v": 3,
        "courseThumbnail": "https://img.youtube.com/vi/0hrJGWrCux0/maxresdefault.jpg"
    },
    {
        "_id": "605c72efb3f1c2b1f8e4e1aa",
        "courseTitle": "Robotics : Principles and Applications",
        "courseDescription": "<h2>Unlock theRobotics</h2><p>Robotics is a multidisciplinary field that combines mechanical engineering, electronics, and computer science to design and build robots. This course will introduce you to the principles of robotics and guide you through the process of creating, programming, and controlling robots.</p><ul><li>Understand data analysis and visualization</li><li>Learn machine learning algorithms and their applications</li><li>Work with popular data science libraries like Pandas and Scikit-Learn</li></ul>",
        "coursePrice": 35714.2857142857,
        "isPublished": true,
        "discount": 30,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "Introduction to Robotics",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": "Overview of Robotics and Its Applications",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/samplelink1",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Historical Development and Significance of Robotics",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink2",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    },
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Types of Robots and Their Functionalities",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink2",
                        "isPreviewFree": false,
                        "lectureOrder": 3
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Mechanics and Motion in Robotics",
                "chapterContent": [
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Understanding Robot Components and Structures",
                        "lectureDuration": 20,
                        "lectureUrl": "https://youtu.be/samplelink3",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture5",
                        "lectureTitle": "Kinematic Analysis and Motion Modeling",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink4",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    },
                    {
                        "lectureId": "lecture6",
                        "lectureTitle": "Inverse and Forward Kinematics for Robot Movement",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink2",
                        "isPreviewFree": false,
                        "lectureOrder": 3
                    }
                ]
            },
            {
                "chapterId": "chapter3",
                "chapterOrder": 3,
                "chapterTitle": "Sensory Systems and Robot Perception",
                "chapterContent": [
                    {
                        "lectureId": "lecture7",
                        "lectureTitle": "Sensor Types Used in Robotics",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/samplelink5",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture8",
                        "lectureTitle": "Data Acquisition and Processing for Robot Perception",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink6",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    },
                    {
                        "lectureId": "lecture9",
                        "lectureTitle": "Mapping and Localization Techniques",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink7",
                        "isPreviewFree": false,
                        "lectureOrder": 3
                    }
                ]
            },
            {
                "chapterId": "chapter4",
                "chapterOrder": 4,
                "chapterTitle": "Programming and Control of Robots",
                "chapterContent": [
                    {
                        "lectureId": "lecture10",
                        "lectureTitle": "Programming Languages and Environments for Robot Control",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/samplelink8",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture11",
                        "lectureTitle": "Control Methods, Including PID Controllers",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink9",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    },
                    {
                        "lectureId": "lecture12",
                        "lectureTitle": "Trajectory Planning and Motion Control Strategies",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink10",
                        "isPreviewFree": false,
                        "lectureOrder": 3
                    }
                ]
            },
            {
                "chapterId": "chapter5",
                "chapterOrder": 5,
                "chapterTitle": "Vision Systems in Robotics",
                "chapterContent": [
                    {
                        "lectureId": "lecture13",
                        "lectureTitle": "Basics of Computer Vision for Robots",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/samplelink11",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture14",
                        "lectureTitle": "Object Recognition, Tracking, and Manipulation",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink12",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    },
                    {
                        "lectureId": "lecture15",
                        "lectureTitle": "Applications of Robotic Vision in Industry",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink13",
                        "isPreviewFree": false,
                        "lectureOrder": 3
                    }
                ]
            },
            {
                "chapterId": "chapter6",
                "chapterOrder": 6,
                "chapterTitle": "Robot Navigation and Mapping",
                "chapterContent": [
                    {
                        "lectureId": "lecture16",
                        "lectureTitle": "Understanding SLAM (Simultaneous Localization and Mapping)",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/samplelink14",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture17",
                        "lectureTitle": "Building and Updating Maps in Dynamic Environments",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink15",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    },
                    {
                        "lectureId": "lecture18",
                        "lectureTitle": "Navigational Algorithms and Path Planning",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink16",
                        "isPreviewFree": false,
                        "lectureOrder": 3
                    }
                ]
            },
            {
                "chapterId": "chapter7",
                "chapterOrder": 7,
                "chapterTitle": "Real-World Robotics Applications",
                "chapterContent": [
                    {
                        "lectureId": "lecture19",
                        "lectureTitle": "Case Studies and Industrial Robotics",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/samplelink17",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture20",
                        "lectureTitle": "Collaborative Robots (Cobots) and Automation",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink18",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    },
                    {
                        "lectureId": "lecture21",
                        "lectureTitle": "Medical and Healthcare Robotics, Drones, and More",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink19",
                        "isPreviewFree": false,
                        "lectureOrder": 3
                    }
                ]
            },
            {
                "chapterId": "chapter8",
                "chapterOrder": 8,
                "chapterTitle": "Future of Robotics and Ethical Considerations",
                "chapterContent": [
                    {
                        "lectureId": "lecture22",
                        "lectureTitle": "Ethical Challenges and Responsibilities in Robotics",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/samplelink20",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture23",
                        "lectureTitle": "Emerging Technologies and Advancements",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink21",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    },
                    {
                        "lectureId": "lecture24",
                        "lectureTitle": "Preparing for a Career in Robotics",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink22",
                        "isPreviewFree": false,
                        "lectureOrder": 3
                    }
                ]
            }
    
        ],
        "educator": "675ac1512100b91a6d9b8b24",
        "enrolledStudents": [
            "user_2qjlgkAqIMpiR2flWIRzvWKtE0w"
        ],
        "courseRatings": [],
        "createdAt": "2024-12-17T08:16:53.622Z",
        "updatedAt": "2025-01-02T06:53:59.753Z",
        "__v": 1,
        "courseThumbnail": "https://img.youtube.com/vi/NRj6gzah7JA/maxresdefault.jpg"
    },
    {
        "_id": "605c72efb3f1c2b1f8e4e1ab",
        "courseTitle": "Machine Learning (ML)",
        "courseDescription": "<h2>Protect the Digital World</h2><p>Machine Learning is a vital field within Artificial Intelligence that focuses on the development of algorithms and models that enable computers to learn and make predictions from data. This course will provide you with a comprehensive understanding of machine learning techniques and their practical applications.</p><ul><li>Understand common cybersecurity threats</li><li>Learn about encryption and secure communication</li><li>Explore tools for penetration testing</li></ul>",
        "coursePrice": 22940,
        "isPublished": true,
        "discount": 15,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "Foundations of Machine Learning",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": "Overview of Machine Learning and Its Significance",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/samplelink1",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Types of Machine Learning: Supervised, Unsupervised, Reinforcement",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink2",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    },
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "The Machine Learning Workflow",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink3",
                        "isPreviewFree": false,
                        "lectureOrder": 3
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Data Preparation and Feature Engineering",
                "chapterContent": [
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Data Cleaning and Transformation Techniques",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/samplelink4",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture5",
                        "lectureTitle": "Feature Selection and Extraction for Optimization",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink5",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    },
                    {
                        "lectureId": "lecture6",
                        "lectureTitle": "Handling Missing Data and Outlier Detection",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink6",
                        "isPreviewFree": false,
                        "lectureOrder": 3
                    }
                ]
            },
            {
                "chapterId": "chapter3",
                "chapterOrder": 3,
                "chapterTitle": "Supervised Learning Algorithms",
                "chapterContent": [
                    {
                        "lectureId": "lecture7",
                        "lectureTitle": "Linear and Logistic Regression Explained",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/samplelink7",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture8",
                        "lectureTitle": "Decision Trees, Random Forests, and Ensemble Learning",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink8",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    },
                    {
                        "lectureId": "lecture9",
                        "lectureTitle": "Support Vector Machines and k-Nearest Neighbors",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink9",
                        "isPreviewFree": false,
                        "lectureOrder": 3
                    }
                ]
            },
            {
                "chapterId": "chapter4",
                "chapterOrder": 4,
                "chapterTitle": "Unsupervised Learning Techniques",
                "chapterContent": [
                    {
                        "lectureId": "lecture10",
                        "lectureTitle": "Clustering Approaches: K-Means, Hierarchical, DBSCAN",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/samplelink10",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture11",
                        "lectureTitle": "Applying Dimensionality Reduction with PCA",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink11",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    },
                    {
                        "lectureId": "lecture12",
                        "lectureTitle": "Anomaly Detection and Association Rule Mining",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink12",
                        "isPreviewFree": false,
                        "lectureOrder": 3
                    }
                ]
            },
            {
                "chapterId": "chapter5",
                "chapterOrder": 5,
                "chapterTitle": "Deep Learning and Neural Networks",
                "chapterContent": [
                    {
                        "lectureId": "lecture13",
                        "lectureTitle": "Introduction to Neural Networks and Deep Learning",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/samplelink13",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture14",
                        "lectureTitle": "Training Deep Learning Models Efficiently",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink14",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    },
                    {
                        "lectureId": "lecture15",
                        "lectureTitle": "Exploring CNNs and RNNs",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink15",
                        "isPreviewFree": false,
                        "lectureOrder": 3
                    }
                ]
            }
            ,{
                "chapterId": "chapter6",
                "chapterOrder": 6,
                "chapterTitle": "Model Evaluation and Optimization",
                "chapterContent": [
                    {
                        "lectureId": "lecture16",
                        "lectureTitle": "Cross-Validation and Model Evaluation Metrics",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/samplelink16",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture17",
                        "lectureTitle": "Managing Overfitting and Underfitting",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink17",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    },
                    {
                        "lectureId": "lecture18",
                        "lectureTitle": "Hyperparameter Optimization Strategies",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink18",
                        "isPreviewFree": false,
                        "lectureOrder": 3
                    }
                ]
            },
            {
                "chapterId": "chapter7",
                "chapterOrder": 7,
                "chapterTitle": "Practical Machine Learning Applications",
                "chapterContent": [
                    {
                        "lectureId": "lecture19",
                        "lectureTitle": "Real-World Machine Learning Case Studies",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/samplelink19",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture20",
                        "lectureTitle": "Designing and Implementing ML Models",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink20",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    },
                    {
                        "lectureId": "lecture21",
                        "lectureTitle": "Presenting and Documenting Analytical Results",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink21",
                        "isPreviewFree": false,
                        "lectureOrder": 3
                    }
                ]
            },
            {
                "chapterId": "chapter8",
                "chapterOrder": 8,
                "chapterTitle": "Ethics and Future Directions in Machine Learning",
                "chapterContent": [
                    {
                        "lectureId": "lecture22",
                        "lectureTitle": "Ethical Challenges and Responsibilities in ML",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/samplelink22",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture23",
                        "lectureTitle": "Emerging Trends and Advancements in AI",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink23",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    },
                    {
                        "lectureId": "lecture24",
                        "lectureTitle": "Preparing for Careers and Opportunities in ML",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink24",
                        "isPreviewFree": false,
                        "lectureOrder": 3
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b24",
        "enrolledStudents": [
            "user_2qjlgkAqIMpiR2flWIRzvWKtE0w"
        ],
        "courseRatings": [],
        "createdAt": "2024-12-17T08:16:53.622Z",
        "updatedAt": "2025-01-02T06:56:13.208Z",
        "__v": 1,
        "courseThumbnail": "https://img.youtube.com/vi/LvC68w9JS4Y/maxresdefault.jpg"
    },
    {
        "_id": "605c72efb3f1c2b1f8e6b1ac",
        "courseTitle": "SQL server",
        "courseDescription": "<h2>Learn SQL !! </h2><p>SQL Server is a widely used relational database management system (RDBMS) with applications in data storage, retrieval, and management. This course will equip you with the skills to work with SQL Server for both administrative tasks and database development.</p><ul><li>Understand common cybersecurity threats</li><li>Learn about encryption and secure communication</li><li>Explore tools for penetration testing</li></ul>",
        "coursePrice": 22940,
        "isPublished": true,
        "discount": 15,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "Introduction to SQL Server",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": "Overview of SQL Server and Its Significance",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/samplelink1",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Understanding the Client-Server Architecture",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink2",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    },
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Different Editions and Features of SQL Server",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink3",
                        "isPreviewFree": false,
                        "lectureOrder": 3
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "SQL Server Installation and Configuration",
                "chapterContent": [
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Installing SQL Server: Step-by-Step Guide",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/samplelink4",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture5",
                        "lectureTitle": "Configuring Server Settings for Optimal Performance",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink5",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    },
                    {
                        "lectureId": "lecture6",
                        "lectureTitle": "Managing Security and Access Controls",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink6",
                        "isPreviewFree": false,
                        "lectureOrder": 3
                    }
                ]
            },
            {
                "chapterId": "chapter3",
                "chapterOrder": 3,
                "chapterTitle": "Database Design and Normalization",
                "chapterContent": [
                    {
                        "lectureId": "lecture7",
                        "lectureTitle": "Database Design Principles: Best Practices",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/samplelink7",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture8",
                        "lectureTitle": "Creating and Managing Database Schemas",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink8",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    },
                    {
                        "lectureId": "lecture9",
                        "lectureTitle": "Data Normalization and Denormalization Techniques",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink9",
                        "isPreviewFree": false,
                        "lectureOrder": 3
                    }
                ]
            },
            {
                "chapterId": "chapter4",
                "chapterOrder": 4,
                "chapterTitle": "SQL Server Querying",
                "chapterContent": [
                    {
                        "lectureId": "lecture10",
                        "lectureTitle": "Writing SQL Queries in T-SQL",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/samplelink10",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture11",
                        "lectureTitle": "Retrieving Data with SELECT Statements",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink11",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    },
                    {
                        "lectureId": "lecture12",
                        "lectureTitle": "Filtering and Sorting Query Results",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink12",
                        "isPreviewFree": false,
                        "lectureOrder": 3
                    }
                ]
            }
            ,
            {
                "chapterId": "chapter5",
                "chapterOrder": 5,
                "chapterTitle": "SQL Server Administration",
                "chapterContent": [
                    {
                        "lectureId": "lecture13",
                        "lectureTitle": "Managing Database Objects (Tables, Views, Stored Procedures)",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/samplelink13",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture14",
                        "lectureTitle": "Backup and Recovery Strategies",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink14",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    },
                    {
                        "lectureId": "lecture15",
                        "lectureTitle": "Performance Tuning and Optimization",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink15",
                        "isPreviewFree": false,
                        "lectureOrder": 3
                    }
                ]
            },
            {
                "chapterId": "chapter6",
                "chapterOrder": 6,
                "chapterTitle": "Data Manipulation and Transactions",
                "chapterContent": [
                    {
                        "lectureId": "lecture16",
                        "lectureTitle": "Inserting, Updating, and Deleting Data",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/samplelink16",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture17",
                        "lectureTitle": "Managing Transactions in SQL Server",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink17",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    },
                    {
                        "lectureId": "lecture18",
                        "lectureTitle": "Error Handling and Transaction Management",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink18",
                        "isPreviewFree": false,
                        "lectureOrder": 3
                    }
                ]
            },
            {
                "chapterId": "chapter7",
                "chapterOrder": 7,
                "chapterTitle": "Advanced Database Development",
                "chapterContent": [
                    {
                        "lectureId": "lecture19",
                        "lectureTitle": "Creating and Managing Indexes",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/samplelink19",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture20",
                        "lectureTitle": "Triggers and User-Defined Functions",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink20",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    },
                    {
                        "lectureId": "lecture21",
                        "lectureTitle": "Dynamic SQL and Advanced Programming Techniques",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink21",
                        "isPreviewFree": false,
                        "lectureOrder": 3
                    }
                ]
            },
            {
                "chapterId": "chapter8",
                "chapterOrder": 8,
                "chapterTitle": "High Availability and Security",
                "chapterContent": [
                    {
                        "lectureId": "lecture22",
                        "lectureTitle": "Implementing High Availability Solutions (Clustering, AlwaysOn)",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/samplelink22",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture23",
                        "lectureTitle": "Security Features and Best Practices",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink23",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    },
                    {
                        "lectureId": "lecture24",
                        "lectureTitle": "Auditing and Compliance in SQL Server",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink24",
                        "isPreviewFree": false,
                        "lectureOrder": 3
                    }
                ]
            },
        ],
        "educator": "675ac1512100b91a6d9b8b24",
        "enrolledStudents": [
            "user_2qjlgkAqIMpiR2flWIRzvWKtE0w"
        ],
        "courseRatings": [],
        "createdAt": "2024-12-17T08:16:53.622Z",
        "updatedAt": "2025-01-02T06:56:13.208Z",
        "__v": 1,
        "courseThumbnail": "https://img.youtube.com/vi/HvxmF0FUwrM/maxresdefault.jpg"
    },
    {
        "_id": "702a72efb3f1c2b1f8e6b1ac",
        "courseTitle": "My SQL",
        "courseDescription": "<h2>Learn My SQL !! </h2><p>SQL Server is a widely used relational database management system (RDBMS) with applications in data storage, retrieval, and management. This course will equip you with the skills to work with SQL Server for both administrative tasks and database development.</p><ul><li>Understand common cybersecurity threats</li><li>Learn about encryption and secure communication</li><li>Explore tools for penetration testing</li></ul>",
        "coursePrice": 9444,
        "isPublished": true,
        "discount": 10,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "Introduction to MySQL",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": "Overview of MySQL and Its Importance",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/samplelink1",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Understanding the Relational Database Model",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink2",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    },
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Different MySQL Editions and Features",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink3",
                        "isPreviewFree": false,
                        "lectureOrder": 3
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "MySQL Installation and Configuration",
                "chapterContent": [
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Installing MySQL Server: A Step-by-Step Guide",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/samplelink4",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture5",
                        "lectureTitle": "Configuring MySQL Server Settings",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink5",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    },
                    {
                        "lectureId": "lecture6",
                        "lectureTitle": "Managing Security and Access Controls in MySQL",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink6",
                        "isPreviewFree": false,
                        "lectureOrder": 3
                    }
                ]
            },
            {
                "chapterId": "chapter3",
                "chapterOrder": 3,
                "chapterTitle": "Database Design and Normalization",
                "chapterContent": [
                    {
                        "lectureId": "lecture7",
                        "lectureTitle": "Fundamentals of Database Design",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/samplelink7",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture8",
                        "lectureTitle": "Creating and Managing Database Schemas",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink8",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    },
                    {
                        "lectureId": "lecture9",
                        "lectureTitle": "Data Normalization and Denormalization Techniques",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink9",
                        "isPreviewFree": false,
                        "lectureOrder": 3
                    }
                ]
            },
            {
                "chapterId": "chapter4",
                "chapterOrder": 4,
                "chapterTitle": "MySQL Querying",
                "chapterContent": [
                    {
                        "lectureId": "lecture10",
                        "lectureTitle": "Writing SQL Queries for MySQL",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/samplelink10",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture11",
                        "lectureTitle": "Retrieving Data with SELECT Statements",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink11",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    },
                    {
                        "lectureId": "lecture12",
                        "lectureTitle": "Filtering and Sorting Query Results",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink12",
                        "isPreviewFree": false,
                        "lectureOrder": 3
                    }
                ]
            }
            ,{
                "chapterId": "chapter5",
                "chapterOrder": 5,
                "chapterTitle": "MySQL Administration",
                "chapterContent": [
                    {
                        "lectureId": "lecture13",
                        "lectureTitle": "Managing Database Objects (Tables, Views, Stored Procedures)",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/samplelink13",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture14",
                        "lectureTitle": "Backup and Recovery Strategies in MySQL",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink14",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    },
                    {
                        "lectureId": "lecture15",
                        "lectureTitle": "Performance Tuning and Optimization Techniques",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink15",
                        "isPreviewFree": false,
                        "lectureOrder": 3
                    }
                ]
            },
            {
                "chapterId": "chapter6",
                "chapterOrder": 6,
                "chapterTitle": "Data Manipulation and Transactions",
                "chapterContent": [
                    {
                        "lectureId": "lecture16",
                        "lectureTitle": "Inserting, Updating, and Deleting Data in MySQL",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/samplelink16",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture17",
                        "lectureTitle": "Managing Transactions for Data Integrity",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink17",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    },
                    {
                        "lectureId": "lecture18",
                        "lectureTitle": "Error Handling and Transaction Management",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink18",
                        "isPreviewFree": false,
                        "lectureOrder": 3
                    }
                ]
            },
            {
                "chapterId": "chapter7",
                "chapterOrder": 7,
                "chapterTitle": "Advanced Database Development",
                "chapterContent": [
                    {
                        "lectureId": "lecture19",
                        "lectureTitle": "Creating and Managing Indexes in MySQL",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/samplelink19",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture20",
                        "lectureTitle": "Triggers and Stored Procedures Explained",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink20",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    },
                    {
                        "lectureId": "lecture21",
                        "lectureTitle": "Dynamic SQL and Advanced Programming Techniques",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink21",
                        "isPreviewFree": false,
                        "lectureOrder": 3
                    }
                ]
            },
            {
                "chapterId": "chapter8",
                "chapterOrder": 8,
                "chapterTitle": "High Availability and Security",
                "chapterContent": [
                    {
                        "lectureId": "lecture22",
                        "lectureTitle": "Implementing High Availability Solutions in MySQL",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/samplelink22",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture23",
                        "lectureTitle": "MySQL Security Features and Best Practices",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink23",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    },
                    {
                        "lectureId": "lecture24",
                        "lectureTitle": "Auditing and Compliance in MySQL",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink24",
                        "isPreviewFree": false,
                        "lectureOrder": 3
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b24",
        "enrolledStudents": [
            "user_2qjlgkAqIMpiR2flWIRzvWKtE0w"
        ],
        "courseRatings": [],
        "createdAt": "2024-12-17T08:16:53.622Z",
        "updatedAt": "2025-01-02T06:56:13.208Z",
        "__v": 1,
        "courseThumbnail": "https://img.youtube.com/vi/5OdVJbNCSso/maxresdefault.jpg"
    }
    ,
    {
        "_id": "605f89d2a1c4e3b6f9d7c2bf",
        "courseTitle": "MongoDB Database Administration and Development ",
        "courseDescription": "<h2>Learn SQL !! </h2><p>MongoDB is a popular open-source NoSQL database system known for its flexibility and scalability. This course will equip you with the skills to work with MongoDB for both administrative tasks and database development.</p><ul><li>Understand common cybersecurity threats</li><li>Learn about encryption and secure communication</li><li>Explore tools for penetration testing</li></ul>",
        "coursePrice": 17000,
        "isPublished": true,
        "discount": 50,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "Introduction to MongoDB",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": "Overview of MongoDB and Its Significance",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/samplelink1",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Understanding NoSQL Databases",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink2",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    },
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Different MongoDB Editions and Features",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink3",
                        "isPreviewFree": false,
                        "lectureOrder": 3
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "MongoDB Installation and Configuration",
                "chapterContent": [
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Installing MongoDB",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/samplelink4",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture5",
                        "lectureTitle": "Configuring Server Settings",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink5",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    },
                    {
                        "lectureId": "lecture6",
                        "lectureTitle": "Managing Security and Access",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink6",
                        "isPreviewFree": false,
                        "lectureOrder": 3
                    }
                ]
            },
            {
                "chapterId": "chapter3",
                "chapterOrder": 3,
                "chapterTitle": "Data Modeling and Schema Design",
                "chapterContent": [
                    {
                        "lectureId": "lecture7",
                        "lectureTitle": "Designing Document-Based Data Models",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/samplelink7",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture8",
                        "lectureTitle": "Creating and Managing Collections",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink8",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    },
                    {
                        "lectureId": "lecture9",
                        "lectureTitle": "Data Modeling Best Practices",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink9",
                        "isPreviewFree": false,
                        "lectureOrder": 3
                    }
                ]
            },
            {
                "chapterId": "chapter4",
                "chapterOrder": 4,
                "chapterTitle": "Querying and CRUD Operations",
                "chapterContent": [
                    {
                        "lectureId": "lecture10",
                        "lectureTitle": "Performing CRUD Operations",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/samplelink10",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture11",
                        "lectureTitle": "Filtering, Projection, and Sorting Documents",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink11",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    },
                    {
                        "lectureId": "lecture12",
                        "lectureTitle": "Aggregation Framework for Complex Queries",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink12",
                        "isPreviewFree": false,
                        "lectureOrder": 3
                    }
                ]
            },
            {
                "chapterId": "chapter5",
                "chapterOrder": 5,
                "chapterTitle": "Indexing and Performance Optimization",
                "chapterContent": [
                    {
                        "lectureId": "lecture13",
                        "lectureTitle": "Creating and Managing Indexes",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/samplelink13",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture14",
                        "lectureTitle": "Performance Optimization Techniques",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink14",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    },
                    {
                        "lectureId": "lecture15",
                        "lectureTitle": "Query Profiling and Monitoring",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink15",
                        "isPreviewFree": false,
                        "lectureOrder": 3
                    }
                ]
            },
            {
                "chapterId": "chapter6",
                "chapterOrder": 6,
                "chapterTitle": "MongoDB Administration",
                "chapterContent": [
                    {
                        "lectureId": "lecture16",
                        "lectureTitle": "Managing Databases and Collections",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/samplelink16",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture17",
                        "lectureTitle": "Backup and Restoration Strategies",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink17",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    },
                    {
                        "lectureId": "lecture18",
                        "lectureTitle": "Replication and High Availability in MongoDB",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink18",
                        "isPreviewFree": false,
                        "lectureOrder": 3
                    }
                ]
            },
            {
                "chapterId": "chapter7",
                "chapterOrder": 7,
                "chapterTitle": "Sharding and Scaling",
                "chapterContent": [
                    {
                        "lectureId": "lecture19",
                        "lectureTitle": "Horizontal Scaling with Sharding",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/samplelink19",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture20",
                        "lectureTitle": "Scaling Strategies and Considerations",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink20",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    },
                    {
                        "lectureId": "lecture21",
                        "lectureTitle": "Deploying MongoDB Clusters",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink21",
                        "isPreviewFree": false,
                        "lectureOrder": 3
                    }
                ]
            },
            {
                "chapterId": "chapter8",
                "chapterOrder": 8,
                "chapterTitle": "Application Development with MongoDB",
                "chapterContent": [
                    {
                        "lectureId": "lecture22",
                        "lectureTitle": "Integrating MongoDB with Programming Languages",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/samplelink22",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture23",
                        "lectureTitle": "Building Applications Using MongoDB as the Data Store",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink23",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    },
                    {
                        "lectureId": "lecture24",
                        "lectureTitle": "Data Aggregation and Pipeline Operations",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink24",
                        "isPreviewFree": false,
                        "lectureOrder": 3
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b24",
        "enrolledStudents": [
            "user_2qjlgkAqIMpiR2flWIRzvWKtE0w"
        ],
        "courseRatings": [],
        "createdAt": "2024-12-17T08:16:53.622Z",
        "updatedAt": "2025-01-02T06:56:13.208Z",
        "__v": 1,
        "courseThumbnail": "https://img.youtube.com/vi/ExcRbA7fy_A/maxresdefault.jpg"
    },
    {
        "_id": "504ba4f7b8c9a1e2f7d8c3ab",
        "courseTitle": "PHP",
        "courseDescription": "<h2>Learn PHP</h2><p>PHP is a popular server-side scripting language used for web development. This course will provide you with a comprehensive understanding of PHP, its applications, and how to build dynamic web applications.</p><ul><li>Understand common cybersecurity threats</li><li>Learn about encryption and secure communication</li><li>Explore tools for penetration testing</li></ul>",
        "coursePrice": 21000,
        "isPublished": true,
        "discount": 50,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "Introduction to PHP",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": "Overview of PHP and Its Role in Web Development",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/samplelink1",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Setting Up a PHP Development Environment",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink2",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    },
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Writing and Executing PHP Scripts",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink3",
                        "isPreviewFree": false,
                        "lectureOrder": 3
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "PHP Basics",
                "chapterContent": [
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Variables, Data Types, and Operators in PHP",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/samplelink4",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture5",
                        "lectureTitle": "Control Structures (if Statements, Loops, and Switches)",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink5",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    },
                    {
                        "lectureId": "lecture6",
                        "lectureTitle": "Functions and User-Defined Functions in PHP",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink6",
                        "isPreviewFree": false,
                        "lectureOrder": 3
                    }
                ]
            },
            {
                "chapterId": "chapter3",
                "chapterOrder": 3,
                "chapterTitle": "PHP and HTML",
                "chapterContent": [
                    {
                        "lectureId": "lecture7",
                        "lectureTitle": "Embedding PHP within HTML",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/samplelink7",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture8",
                        "lectureTitle": "Form Handling and Processing User Input",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink8",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    },
                    {
                        "lectureId": "lecture9",
                        "lectureTitle": "Building Dynamic Web Pages with PHP",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink9",
                        "isPreviewFree": false,
                        "lectureOrder": 3
                    }
                ]
            },
            {
                "chapterId": "chapter4",
                "chapterOrder": 4,
                "chapterTitle": "PHP and Databases",
                "chapterContent": [
                    {
                        "lectureId": "lecture10",
                        "lectureTitle": "Connecting to Databases (MySQL) with PHP",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/samplelink10",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture11",
                        "lectureTitle": "Performing Database Operations (CRUD)",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink11",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    },
                    {
                        "lectureId": "lecture12",
                        "lectureTitle": "Using SQL Queries with PHP",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink12",
                        "isPreviewFree": false,
                        "lectureOrder": 3
                    }
                ]
            },
            {
                "chapterId": "chapter5",
                "chapterOrder": 5,
                "chapterTitle": "Working with Cookies and Sessions",
                "chapterContent": [
                    {
                        "lectureId": "lecture13",
                        "lectureTitle": "Managing User Sessions and Authentication",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/samplelink13",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture14",
                        "lectureTitle": "Handling Cookies and Session Variables",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink14",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    },
                    {
                        "lectureId": "lecture15",
                        "lectureTitle": "Building Secure Web Applications",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink15",
                        "isPreviewFree": false,
                        "lectureOrder": 3
                    }
                ]
            },
            {
                "chapterId": "chapter6",
                "chapterOrder": 6,
                "chapterTitle": "Object-Oriented PHP",
                "chapterContent": [
                    {
                        "lectureId": "lecture16",
                        "lectureTitle": "Introduction to Object-Oriented Programming in PHP",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/samplelink16",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture17",
                        "lectureTitle": "Creating Classes and Objects",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink17",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    },
                    {
                        "lectureId": "lecture18",
                        "lectureTitle": "Encapsulation, Inheritance, and Polymorphism",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink18",
                        "isPreviewFree": false,
                        "lectureOrder": 3
                    }
                ]
            },
            {
                "chapterId": "chapter7",
                "chapterOrder": 7,
                "chapterTitle": "PHP Frameworks and Libraries",
                "chapterContent": [
                    {
                        "lectureId": "lecture19",
                        "lectureTitle": "Overview of Popular PHP Frameworks (Laravel, Symfony)",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/samplelink19",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture20",
                        "lectureTitle": "Utilizing Third-Party Libraries and Packages",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink20",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    },
                    {
                        "lectureId": "lecture21",
                        "lectureTitle": "Building Web Applications with Frameworks",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink21",
                        "isPreviewFree": false,
                        "lectureOrder": 3
                    }
                ]
            },
            {
                "chapterId": "chapter8",
                "chapterOrder": 8,
                "chapterTitle": "Web Application Deployment",
                "chapterContent": [
                    {
                        "lectureId": "lecture22",
                        "lectureTitle": "Preparing Web Applications for Deployment",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/samplelink22",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture23",
                        "lectureTitle": "Uploading and Configuring PHP Applications on Web Servers",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink23",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    },
                    {
                        "lectureId": "lecture24",
                        "lectureTitle": "Troubleshooting and Debugging in a Production Environment",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink24",
                        "isPreviewFree": false,
                        "lectureOrder": 3
                    }
                ]
            }    
        ],
        "educator": "675ac1512100b91a6d9b8b24",
        "enrolledStudents": [
            "user_2qjlgkAqIMpiR2flWIRzvWKtE0w"
        ],
        "courseRatings": [],
        "createdAt": "2024-12-17T08:16:53.622Z",
        "updatedAt": "2025-01-02T06:56:13.208Z",
        "__v": 1,
        "courseThumbnail": "https://img.youtube.com/vi/t0syDUSbdfE/maxresdefault.jpg"
    },
    {
        "_id": "805d34f7b8c9a1e2f7d8c3ab",
        "courseTitle": "Advance PHP",
        "courseDescription": "<h2>Learn Advance PHP</h2><p>Advanced PHP development builds on the fundamentals of PHP programming and enables you to create complex, feature-rich web applications. This course focuses on advanced PHP topics and techniques for building robust, scalable web applications.</p><ul><li>Understand common cybersecurity threats</li><li>Learn about encryption and secure communication</li><li>Explore tools for penetration testing</li></ul>",
        "coursePrice": 25000,
        "isPublished": true,
        "discount": 50,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "Advanced PHP Features",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": "Understanding Namespaces and Autoloading",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/samplelink1",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Traits, Anonymous Classes, and Type Hinting",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink2",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    },
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Exception Handling and Custom Error Management",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink3",
                        "isPreviewFree": false,
                        "lectureOrder": 3
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Database Interaction with PDO",
                "chapterContent": [
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Introduction to PHP Data Objects (PDO)",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/samplelink4",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture5",
                        "lectureTitle": "Prepared Statements for Secure Database Queries",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink5",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    },
                    {
                        "lectureId": "lecture6",
                        "lectureTitle": "Transactions and Handling Errors in Database Operations",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink6",
                        "isPreviewFree": false,
                        "lectureOrder": 3
                    }
                ]
            },
            {
                "chapterId": "chapter3",
                "chapterOrder": 3,
                "chapterTitle": "Building Secure Web Applications",
                "chapterContent": [
                    {
                        "lectureId": "lecture7",
                        "lectureTitle": "Handling Authentication and Authorization",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/samplelink7",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture8",
                        "lectureTitle": "User Input Validation and Filtering",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink8",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    },
                    {
                        "lectureId": "lecture9",
                        "lectureTitle": "Implementing Security Best Practices",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink9",
                        "isPreviewFree": false,
                        "lectureOrder": 3
                    }
                ]
            },
            {
                "chapterId": "chapter4",
                "chapterOrder": 4,
                "chapterTitle": "Web Services and APIs with PHP",
                "chapterContent": [
                    {
                        "lectureId": "lecture10",
                        "lectureTitle": "Consuming and Creating RESTful APIs",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/samplelink10",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture11",
                        "lectureTitle": "Working with JSON and XML Data",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink11",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    },
                    {
                        "lectureId": "lecture12",
                        "lectureTitle": "Authentication in API Development",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink12",
                        "isPreviewFree": false,
                        "lectureOrder": 3
                    }
                ]
            },
            {
                "chapterId": "chapter5",
                "chapterOrder": 5,
                "chapterTitle": "Caching and Performance Optimization",
                "chapterContent": [
                    {
                        "lectureId": "lecture13",
                        "lectureTitle": "Caching Techniques to Improve Web Application Performance",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/samplelink13",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture14",
                        "lectureTitle": "Output Caching and Opcode Caching",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink14",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    },
                    {
                        "lectureId": "lecture15",
                        "lectureTitle": "Profiling and Optimizing PHP Code",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink15",
                        "isPreviewFree": false,
                        "lectureOrder": 3
                    }
                ]
            },
            {
                "chapterId": "chapter6",
                "chapterOrder": 6,
                "chapterTitle": "Advanced Object-Oriented PHP",
                "chapterContent": [
                    {
                        "lectureId": "lecture16",
                        "lectureTitle": "Advanced OOP Concepts in PHP",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/samplelink16",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture17",
                        "lectureTitle": "Design Patterns (Singleton, Factory, Dependency Injection)",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink17",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    },
                    {
                        "lectureId": "lecture18",
                        "lectureTitle": "Building Extensible and Maintainable Code",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink18",
                        "isPreviewFree": false,
                        "lectureOrder": 3
                    }
                ]
            },
            {
                "chapterId": "chapter7",
                "chapterOrder": 7,
                "chapterTitle": "Real-Time Web Applications",
                "chapterContent": [
                    {
                        "lectureId": "lecture19",
                        "lectureTitle": "Introduction to WebSockets and Server-Sent Events",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/samplelink19",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture20",
                        "lectureTitle": "Building Real-Time Chat Applications",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink20",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    },
                    {
                        "lectureId": "lecture21",
                        "lectureTitle": "Scalability Considerations for Real-Time Web Applications",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink21",
                        "isPreviewFree": false,
                        "lectureOrder": 3
                    }
                ]
            },
            {
                "chapterId": "chapter8",
                "chapterOrder": 8,
                "chapterTitle": "Advanced Web Development Frameworks",
                "chapterContent": [
                    {
                        "lectureId": "lecture22",
                        "lectureTitle": "Exploring Advanced Features of Popular PHP Frameworks (Laravel, Symfony)",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/samplelink22",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture23",
                        "lectureTitle": "Extending and Customizing Web Applications with Frameworks",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink23",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    },
                    {
                        "lectureId": "lecture24",
                        "lectureTitle": "Deployment and Maintenance of Advanced Web Applications",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink24",
                        "isPreviewFree": false,
                        "lectureOrder": 3
                    }
                ]
            }    
        ],
        "educator": "675ac1512100b91a6d9b8b24",
        "enrolledStudents": [
            "user_2qjlgkAqIMpiR2flWIRzvWKtE0w"
        ],
        "courseRatings": [],
        "createdAt": "2024-12-17T08:16:53.622Z",
        "updatedAt": "2025-01-02T06:56:13.208Z",
        "__v": 1,
        "courseThumbnail": "https://img.youtube.com/vi/t0syDUSbdfE/maxresdefault.jpg"
    }
]
