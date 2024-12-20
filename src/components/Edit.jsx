import React from "react";
import { handleEditClick, saveEditedTask } from "../utils/HandleFunctions";
import { useUtils } from "../utils/UtilsContext";
import { MdModeEditOutline } from "react-icons/md";

const Edit = ({id, content}) => {
  const { setTask, editingId, setEditingId, newContent, setNewContent } =
    useUtils();
  return (
    <div>
      {editingId === id ? (
        <button
          onClick={() =>
            saveEditedTask(
              editingId,
              newContent,
              setTask,
              setEditingId,
              setNewContent
            )
          }
          className="text-green-600 cursor-pointer"
        >
          Save
        </button>
      ) : (
        <MdModeEditOutline
          onClick={() =>
            handleEditClick(id, content, setEditingId, setNewContent)
          }
          className="text-blue-600 cursor-pointer"
        />
      )}
    </div>
  );
};

export default Edit;
