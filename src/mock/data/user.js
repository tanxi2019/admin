import Mock from 'mockjs';
const LoginUsers = [
  {
    id: 1,
    username: 'admin',
    password: '123456',
    avatar: 'https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png',
    name: '张某某'
  }
];

const Users = [];

for (let i = 0; i < 100; i++) {
  Users.push(Mock.mock({
    id: Mock.Random.guid(),
    name: Mock.Random.cname(),
    addr: Mock.mock('@county(true)'),
    'age|18-60': 1,
    birth: Mock.Random.date(),
    sex: Mock.Random.integer(0, 1),
    title: Mock.Random.csentence(5, 30), // Random.csentence( min, max )
    thumbnail_pic_s: Mock.Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
     author_name: Mock.Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
     date: Mock.Random.date() + ' ' + Mock.Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；
  }));
}

export { LoginUsers, Users };
