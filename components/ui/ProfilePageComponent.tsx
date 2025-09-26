"use client";

import { DeveloperInfo } from "@/src/domain/entities/developer";
import { Avatar, Box, Container, Typography } from "@mui/joy";
import { ChangeEvent, useState } from "react";
import { ButtonBase } from "@mui/material";

import "@uppy/core/css/style.min.css";
import "@uppy/dashboard/css/style.min.css";
import "@uppy/image-editor/css/style.min.css";
import { storage } from "@/lib/appwrite/storage";
import { ID } from "appwrite";
import { getDeveloperAvatarUseCase } from "@/src/config";

const ProfilePageComponent = ({ developer }: { developer: DeveloperInfo }) => {
	const [newAvatarImage, setNewAvatarImage] = useState(() => getDeveloperAvatarUseCase.execute(developer.avatarFileId));
	const [newBackgroundImage, setNewBackgroundImage] = useState(() => getDeveloperAvatarUseCase.execute(developer.bannerFileId));
	const avatarImage = getDeveloperAvatarUseCase.execute(developer.avatarFileId);
	const backgroundImage = getDeveloperAvatarUseCase.execute(developer.bannerFileId);

    /*const uppy = new Uppy({
        autoProceed: true,
        logger: debugLogger,
        restrictions: {
            maxFileSize: 10000000,
            maxNumberOfFiles: 1,
            minNumberOfFiles: 1,
            allowedFileTypes: ["image/*"],
        },
    }).use(ImageEditor);*/

    const handleAvatarImageUpload = async (
        event: ChangeEvent<HTMLInputElement>,
    ) => {
        const avatarFile = event.target.files[0];

        if (avatarFile) {
            // uppy.addFile({
            // 	name: "avatar.jpg",
            // 	type: "image/*",
            // 	data: avatarFile
            // })
            //
            // uppy.upload().then((e) => {
            // 	console.log(e);
            // });

            const reader = new FileReader();
            reader.readAsDataURL(avatarFile);
            storage.createFile({
                bucketId: process.env.NEXT_PUBLIC_APPWRITE_STORAGE_BUCKET_ID,
                fileId: ID.unique(),
                file: avatarFile,
            });
            reader.onloadend = () => {
				// @ts-ignore
                setNewAvatarImage(reader.result as string);
            };
        }
    };

    return (
        <Container maxWidth="xl">
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "3rem",
					// @ts-ignore
                    background: backgroundImage,
                    gap: "1rem",
                }}
            >
                <ButtonBase
                    component="label"
                    role={undefined}
                    tabIndex={-1}
                    disableRipple
                    sx={{
                        bgColor: "secondary.main",
                        color: "primary.contrastText",
                        fontSize: 64,
                    }}
                >
                    <Avatar
                        sx={{
                            width: 128,
                            height: 128,
                            borderRadius: "50%",
                            backgroundColor: "primary.contrastText",
                            color: "primary.main",
                            fontSize: 64,
                            "&:hover": {
                                opacity: 0.8,
                            },
                        }}
						// @ts-ignore
                        src={avatarImage}
                    >
						{/* @ts-ignore */}
                        {avatarImage === ""
                            ? `${developer.name.charAt(0)}${developer.surname.charAt(0)}`
                            : null}
                    </Avatar>
                    <input
                        type="file"
                        accept="image/*"
                        style={{
                            overflow: "hidden",
                            clip: "rect(0 0 0 0)",
                            position: "absolute",
                        }}
                        onChange={handleAvatarImageUpload}
                    />
                </ButtonBase>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "1rem",
                    }}
                >
                    <Typography level="h1" gutterBottom>
                        {developer.name} {developer.surname}
                    </Typography>
                    <Typography level="body-lg">
                        {developer.title} from {developer.city}
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
};

export default ProfilePageComponent;
