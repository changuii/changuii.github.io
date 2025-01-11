import {NotionRenderer} from "react-notion-x";


interface NotionPageProps {
    recordMap: any; // 임의로 any
    rootPageId: string;
}

export const NotionPage = ({ recordMap, rootPageId }: NotionPageProps) => {
    return (
        <div className="notion__container">
            <NotionRenderer
                recordMap={recordMap}
                fullPage={true}
                darkMode={false}
                rootPageId={rootPageId}
                previewImages
            />
        </div>
    );
};

export default NotionPage;