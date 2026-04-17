const courses = [
    {
        id: 1,
        title: "كورس JavaScript الشامل",
        instructor: "اتعلم ببساطة",
        image: "data:image/jpeg;base64,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",
        link: "https://www.youtube.com/watch?v=FwxbTGxTcVI"
    },
    {
        id: 2,
        title: "كورس JavaScript الشامل",
        instructor: "عبدالرحمن جمال",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLhImc3PwDDPbnDKYfaT1y6MqcUT8LW9c5qw&s",
        link: "https://www.youtube.com/watch?v=PWuTLTFMtYw"
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