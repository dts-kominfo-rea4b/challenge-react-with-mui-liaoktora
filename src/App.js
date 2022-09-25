import './App.css';
import React from 'react';
import { Grid, List } from '@mui/material';
import Header from './components/Header';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';

// Uncomment untuk memuat daftar kontak
// import contactsJSON from './data/contacts.json';
import contactsJSON from './data/contacts.json';

const App = () => {
  const [contacts, setContacts] = React.useState(contactsJSON);


  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list
  const handleClick = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm

  return (
    <div className="App">
      <Grid container spacing={2}>
        <Header />
        <Grid item xs={6}>
          <ContactForm handleClick={handleClick} />
        </Grid>
        <Grid item xs={6}>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {contacts.map((item, index) => {
              return <Contact data={item} index={index} />;
            })};
          </List>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
