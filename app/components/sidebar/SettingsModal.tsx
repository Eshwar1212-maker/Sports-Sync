"use client"

import { User } from "@prisma/client"
import axios from "axios"
import {AiOutlineEdit} from 'react-icons/ai'
import { useRouter } from "next/navigation"
import { useState } from "react"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { toast } from "react-hot-toast"
import Input from "../inputs/Input"
import Image from "next/image"
import { CldUploadButton } from "next-cloudinary"
import Modal from "../Modal"


interface SettingsModal {
    isOpen?: boolean
    onClose: () => void
    currentUser: User
}


const SettingsModal: React.FC<SettingsModal> = ({
    isOpen, onClose, currentUser
}) => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: {
            errors,

        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: currentUser?.name,
            image: currentUser?.image
        }
    })
    const image = watch('image')
    const handleUpload = (result: any) => {
        setValue('image', result?.info?.secure_url, {
            shouldValidate: true
        })
    }

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true)
        axios.post('/api/settings', data)
            .then(() => {
                router.refresh()
                onClose()
            })
            .catch(() => {
                toast.error("Something went wrong")
            })
            .finally(() => {
                setIsLoading(false)
            })
    }
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">
                            Profile
                        </h2>
                        <div
                            className="mt-10 flex flex-col gap-y-8"
                        >
                            <Input
                                disabled={isLoading}
                                label="Name"
                                id="name"
                                errors={errors}
                                required
                                register={register}
                            />
                            <div className="">
                                <label
                                    className="block text-sm font-md leading-6 text-gray-900"
                                >
                                    Photo
                                </label>
                                <div className="mt-2 flex items-center">
                                    <Image
                                        width="160"
                                        height="200"
                                        className="rounded-md h-[170px]"
                                        alt="Avatar"
                                        src={image || currentUser?.image || "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"}
                                    />
                                    <CldUploadButton
                                        options={{ maxFiles: 1 }}
                                        onUpload={handleUpload}
                                        uploadPreset="d49kth4r"
                                        >
                                        <button
                                            className="text-sm pl-3"
                                            type="button"
                                        >
                                            <AiOutlineEdit size={23}/>
                                        </button>
                                    </CldUploadButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="
            mt-6 
            flex 
            items-center 
            justify-end 
            gap-x-6
          "
                >
                    <button
                        disabled={isLoading}
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                    <button
                        disabled={isLoading}
                        type="submit"
                    >
                        Save
                    </button>
                </div>
            </form>
        </Modal>
    )
}

export default SettingsModal