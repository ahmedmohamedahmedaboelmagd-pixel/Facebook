const courses = [
    {
        id: 1,
        title: "كورس JavaScript الشامل",
        instructor: "أحمد علي",
        image: "https://via.placeholder.com/300x180",
        link: "course-details.html"
    },
    {
        id: 2,
        title: "أساسيات CSS Grid & Flexbox",
        instructor: "سارة محمود",
        image: "https://via.placeholder.com/300x180",
        link: "#"
    },
    {
        id: 3,
        title: "بناء واجهات المستخدم بـ Tailwind",
        instructor: "محمد خالد",
        image: "https://via.placeholder.com/300x180",
        link: "#"
    }
    ,
    {
        id: 4,
        title: "بناء واجهات المستخدم بـ Tailwind",
        instructor: "محمد خالد",
        image: "https://via.placeholder.com/300x180",
        link: "#"
    }
    ,
    {
        id: 5,
        title: "بناء واجهات المستخدم بـ Tailwind",
        instructor: "محمد خالد",
        image: "https://via.placeholder.com/300x180",
        link: "#"
    }
    ,
    {
        id: 6,
        title: "بناء واجهات المستخدم بـ Tailwind",
        instructor: "محمد خالد",
        image: "https://via.placeholder.com/300x180",
        link: "#"
    }
    ,
    {
        id: 7,
        title: "بناء واجهات المستخدم بـ Tailwind",
        instructor: "محمد خالد",
        image: "https://via.placeholder.com/300x180",
        link: "#"
    }
    ,
    {
        id: 8,
        title: "بناء واجهات المستخدم بـ Tailwind",
        instructor: "محمد خالد",
        image: "https://via.placeholder.com/300x180",
        link: "#"
    }
    ,
    {
        id: 9,
        title: "بناء واجهات المستخدم بـ Tailwind",
        instructor: "محمد خالد",
        image: "https://via.placeholder.com/300x180",
        link: "#"
    }
    ,
    {
        id: 10,
        title: "بناء واجهات المستخدم بـ Tailwind",
        instructor: "محمد خالد",
        image: "https://via.placeholder.com/300x180",
        link: "#"
    }
    ,
    {
        id: 11,
        title: "بناء واجهات المستخدم بـ Tailwind",
        instructor: "محمد خالد",
        image: "https://via.placeholder.com/300x180",
        link: "#"
    }
    ,
    {
        id: 12,
        title: "بناء واجهات المستخدم بـ Tailwind",
        instructor: "محمد خالد",
        image: "https://via.placeholder.com/300x180",
        link: "#"
    }
    ,
    {
        id: 13,
        title: "بناء واجهات المستخدم بـ Tailwind",
        instructor: "محمد خالد",
        image: "https://via.placeholder.com/300x180",
        link: "#"
    }
    ,
    {
        id: 14,
        title: "بناء واجهات المستخدم بـ Tailwind",
        instructor: "محمد خالد",
        image: "https://via.placeholder.com/300x180",
        link: "#"
    }
    ,
    {
        id: 15,
        title: "بناء واجهات المستخدم بـ Tailwind",
        instructor: "محمد خالد",
        image: "https://via.placeholder.com/300x180",
        link: "#"
    }
    ,
    {
        id: 16,
        title: "بناء واجهات المستخدم بـ Tailwind",
        instructor: "محمد خالد",
        image: "https://via.placeholder.com/300x180",
        link: "#"
    }
    ,
    {
        id: 17,
        title: "بناء واجهات المستخدم بـ Tailwind",
        instructor: "محمد خالد",
        image: "https://via.placeholder.com/300x180",
        link: "#"
    }
    ,
    {
        id: 18,
        title: "بناء واجهات المستخدم بـ Tailwind",
        instructor: "محمد خالد",
        image: "https://via.placeholder.com/300x180",
        link: "#"
    }
    ,
    {
        id: 19,
        title: "بناء واجهات المستخدم بـ Tailwind",
        instructor: "محمد خالد",
        image: "https://via.placeholder.com/300x180",
        link: "#"
    }
    ,
    {
        id: 20,
        title: "بناء واجهات المستخدم بـ Tailwind",
        instructor: "محمد خالد",
        image: "https://via.placeholder.com/300x180",
        link: "#"
    }
    ,
    {
        id: 21,
        title: "بناء واجهات المستخدم بـ Tailwind",
        instructor: "محمد خالد",
        image: "https://via.placeholder.com/300x180",
        link: "#"
    }
    ,
    {
        id: 22,
        title: "بناء واجهات المستخدم بـ Tailwind",
        instructor: "محمد خالد",
        image: "https://via.placeholder.com/300x180",
        link: "#"
    }
    ,
    {
        id: 23,
        title: "بناء واجهات المستخدم بـ Tailwind",
        instructor: "محمد خالد",
        image: "https://via.placeholder.com/300x180",
        link: "#"
    }
    
];

const grid = document.getElementById('courses-grid');

function displayCourses(data) {
    grid.innerHTML = data.map(course => `
        <div class="card">
            <img src="${course.image}" alt="${course.title}">
            <div class="card-body">
                <h3>${course.title}</h3>
                <p>المحاضر: ${course.instructor}</p>
                <a href="${course.link}" class="btn-view">مشاهدة الكورس</a>
            </div>
        </div>
    `).join('');
}

// تشغيل الدالة عند تحميل الصفحة
displayCourses(courses);

// إضافة خاصية البحث
document.getElementById('searchBar').addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = courses.filter(c => c.title.toLowerCase().includes(term));
    displayCourses(filtered);
});