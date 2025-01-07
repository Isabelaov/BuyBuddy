import { Modal, Text, View } from 'react-native';
import React from 'react';
import { Formik } from 'formik';
import { Button, Loading, Input, CategoriesPicker, Anchor } from '.';
import { ContainerStyles, ModalStyles, TextStyles } from '../assets/styles';
import { createItemSchema } from '../validation/createItem.validation';
import { useItemModal } from '../hooks/useItemModal';
import { ItemModalProps } from '../interfaces/itemModalProps';

export const CreateItemModal: React.FC<ItemModalProps> = ({
  visible,
  setVisible,
  navigation,
  itemId,
  setItemId,
}) => {
  const { submitting, loading, initialValues, handle, handleDelete } =
    useItemModal({
      setVisible,
      navigation,
      itemId,
      setItemId,
    });

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={() => {
        setVisible(false);
        return;
      }}>
      <View style={ModalStyles.modalContainer}>
        <View style={ModalStyles.modalContent}>
          {loading || submitting ? (
            <Loading />
          ) : (
            <>
              <Text style={TextStyles.title}>
                {itemId ? 'Update' : 'Add'} Item
              </Text>
              <Formik
                onSubmit={handle}
                validationSchema={createItemSchema}
                initialValues={initialValues}>
                {({
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  values,
                  errors,
                  touched,
                }) => (
                  <>
                    <Input
                      placeholder="Name"
                      onChangeText={handleChange('name')}
                      onBlur={handleBlur('name')}
                      value={values.name}
                      error={touched.name ? errors.name : undefined}
                    />

                    <Input
                      placeholder="Quantity"
                      onChangeText={handleChange('quantity')}
                      keyboardType="numeric"
                      onBlur={handleBlur('quantity')}
                      value={values.quantity.toString()}
                      error={touched.quantity ? errors.quantity : undefined}
                    />

                    <CategoriesPicker
                      onBlur={handleBlur('quantity')}
                      selectedValue={values.category}
                      onValueChange={handleChange('category')}
                    />

                    <View style={ContainerStyles.bySide}>
                      <Button
                        onPress={() => handleSubmit()}
                        text="Save"
                        disabled={submitting}
                      />

                      {itemId ? (
                        <Button
                          onPress={() => handleDelete()}
                          backgroundPrimary={false}
                          text="Delete"
                          disabled={submitting}
                        />
                      ) : (
                        <></>
                      )}
                    </View>

                    <Anchor
                      text="Cancel"
                      onPress={() => {
                        setVisible(false);
                        return;
                      }}
                    />
                  </>
                )}
              </Formik>
            </>
          )}
        </View>
      </View>
    </Modal>
  );
};
