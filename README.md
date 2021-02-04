### Moja biblioteka

live: https://budnickip.github.io/myLibrary/

Możliwość dodawania książek za pomocą formularza - przed dodaniem następuje walidacja, tytuł książki musi mieć conajmniej 1 znak, autor książki musi mieć conajmniej 3 znaki oraz priorytet przeczytania musi być liczbą od 1 do 5.

W przypadku wprowadzenia wartości niespełniających walidację, użytkownik otrzyma odpowiedni komunikat, a pole zawierające błąd zaświeci się na czerwono oraz książka nie zostanie dodana.

Po dodaniu książki, użytkownik może ją usuwać lub edytować, każda zmiana automatycznie modyfikuje naszą listę książek w localstorage. Przy próbie edycji książki, pola również ulegają walidacji, książka nie doda się, jeśli któreś z pól nie przejdzie próby walidacji.