const dm = require('./db-module.js');

const createDeptSql = `
    CREATE TABLE IF NOT EXISTS dept (
        did INTEGER NOT NULL PRIMARY KEY,
        name VARCHAR(20) NOT NULL)
`;
const createUserSql = `
    CREATE TABLE IF NOT EXISTS user (
        uid VARCHAR(12) PRIMARY KEY,
        password VARCHAR(80) NOT NULL,
        name VARCHAR(20) NOT NULL,
        deptId INTEGER NOT NULL,
        tel VARCHAR(20),
        regDate DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY(deptId) REFERENCES dept(did))
`;
const createTankSql = `
    CREATE TABLE IF NOT EXISTS tank (
        tid INT NOT NULL PRIMARY KEY,
        operating INT DEFAULT 0,
        fish VARCHAR(20) NOT NULL,
        temp FLOAT NOT NULL,
        ph FLOAT NOT NULL,
        oxygen FLOAT NOT NULL
    );
`;

const insertDeptSql = "INSERT INTO dept VALUES(?, ?)";
const insertUserSql = `INSERT INTO user(uid, password, name, deptId, tel) VALUES('admin', '1234', '관리자', 101, '010-2345-6789')`;
const insertTankSql = `INSERT INTO tank VALUES (?, ?, ?, ?, ?, ?)`;

const deptData = [
    [101, '경영지원팀'],
    [102, '영업팀'],
    [103, '생산팀'],
    [104, '연구개발팀']
];
const tankData = [
    [1, 1, '장어 치어', 29.4, 5.6, 0.21],
    [2, 1, '장어 소', 29.4, 5.6, 0.21],
    [3, 1, '장어 소', 29.4, 6.3, 0.21],
    [4, 1, '장어 중', 29.4, 5.6, 0.21],
    [5, 1, '장어 중', 29.4, 5.4, 0.21],
    [6, 1, '장어 중', 29.4, 5.6, 0.21],
    [7, 1, '장어 대', 30.9, 5.5, 0.21],
    [8, 1, '장어 대', 29.4, 5.6, 0.21],
    [9, 1, '장어 대', 30.1, 5.6, 0.21],
    [10, 0, ' ', 0.0, 0.0, 0.0]
];

/* dm.executeQuery(createDeptSql, function() {
    console.log("Dept Table is created");
    for (let dept of deptData) {
        dm.executeQueryWithParams(insertDeptSql, dept, function() {
            console.log("dept record inserted");
        });
    }
});

dm.executeQuery(createUserSql, function() {
    console.log("User Table is created");
    dm.executeQuery(insertUserSql, function() {
        console.log("user record inserted");
    });
}); */

dm.executeQuery(createTankSql, function() {
    console.log("Tank Table is created");
    for (let tank of tankData) {
        dm.executeQueryWithParams(insertTankSql, tank, function() {
            console.log("tank record inserted");
        });
    }
});