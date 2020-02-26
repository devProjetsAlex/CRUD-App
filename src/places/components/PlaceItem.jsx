import React, { useState, useContext } from 'react';
import {AuthContext} from '../../shared/context/auth-context'

import Card from '../../shared/components/Cards/Card'
import Button from '../../shared/components/FormElements/Button';
import Modal from '../../shared/components/Modal/Modal';
import './PlaceItem.css';
import Map from '../../Api/MapBox/Map.component'

const PlaceItem = props => {
  const auth = useContext(AuthContext)
  const [showMap, setShowMap] = useState(false);

  const [showConfirmModal, setShowConfirmModal] = useState(false)


  const openMapHandler = () => setShowMap(true);

  const closeMapHandler = () => setShowMap(false);

  const showDeleteWarningHandler = () => {
    setShowConfirmModal(true)
  }

  const cancelDeleteHandler = () => {
    setShowConfirmModal(false)
    }

    const confirmDeleteHandler =() =>  {
      setShowConfirmModal(false)
      console.log('DELETING....')
    }

  return (
    <React.Fragment>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
      >
        <div className="map-container">
          <Map />
        </div>
      </Modal>

      <Modal show={showConfirmModal} header='Are you sure' footerClass='placeitem__modal-actions' footer={
  <>
        <Button onClick={cancelDeleteHandler} inverse>CANCEL </Button>
        <Button onClick={confirmDeleteHandler} danger>DELETE</Button>
        
  </>
      }>
    <p> Do you want to proceed and delete this place? Please note that it can't be undone</p>
      </Modal>

      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>
          <div className="place-item__actions">

            <Button inverse onClick={openMapHandler}>VIEW ON MAP</Button>

            {auth.isLoggedIn &&(
            <Button to={`/places/${props.id}`}>EDIT</Button> 
            )}

             {auth.isLoggedIn &&(
            <Button onClick={showDeleteWarningHandler} danger>DELETE</Button>
             )}
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default PlaceItem;
