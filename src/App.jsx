import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // usersコレクションに参照する。データを取得するわけではない。
    const usersCollectionRef = collection(db, 'users');
    // usersコレクションを参照したusersCollectionRefにgetDocs()でusersコレクションのドキュメントを複数取得　単一の場合はgetDoc()
    getDocs(usersCollectionRef).then((querySnapshot) => {
       // 複数のドキュメントを含んだquerySnapshotをmap()で回していく。　単一ドキュメントの場合はmap()不要。
       // map関数で新しい配列のオブジェクトを返す。 id:doc.idで新しい配列にid作成。
       // idを含めた新しいオブジェクト配列をsetUsersにセットする。
      setUsers(querySnapshot.docs.map((doc) => ({...doc.data(), id:doc.id})))
    });
  },[]);

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  )
}

export default App
