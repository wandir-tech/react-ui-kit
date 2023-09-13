import { useState } from 'react';
import { AIMessageWidget, MessageWidgetProps } from './AIMessageWidget';
import AIWidgetIcon from '../../../svgs/Icons/AIWidgets/AIWidget';
import ErrorMessageIcon from './ErrorMessageIcon';
import { AISource, IChatMessage } from '../../../../../../Data/source/AISource';

// interface MessageWidgetProps {
//   // https://api.openai.com/v1/chat/completions'
//   // api: 'v1/chat/completions',
//   // servername: 'https://myproxy.com',
//   // https://func270519800.azurewebsites.net/api/TranslateTextToEng
//   servername: string;
//   api: string;
//   port: string;
//   apiKeyOrSessionToken: string;
//   apiKey: string;
// }
export default function UseDefaultAIAssistAnswerWidgetWithProxy({
  servername,
  api,
  port,
  apiKeyOrSessionToken,
}: MessageWidgetProps): AIMessageWidget {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [errorMessage, setErrorMessage] = useState<string>('');

  // eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/no-empty-function
  const fileToWidget = (file: File, context: IChatMessage[]): void => {};

  const renderWidget = (): JSX.Element => {
    if (errorMessage && errorMessage.length > 0) {
      const errorsDescriptions:
        | { title: string; action: () => void }[]
        | undefined = [];

      return (
        <ErrorMessageIcon
          errorMessageText={errorMessage}
          errorsDescriptions={errorsDescriptions}
        />
      );
    }

    return <AIWidgetIcon applyZoom color="green" />;
  };

  const [textFromWidgetToContent, setTextFromWidgetToContent] = useState('');
  const textToWidget = async (
    textToSend: string,
    context: IChatMessage[],
  ): Promise<string> => {
    if (textToSend && textToSend.length > 0) {
      const prompt = `You are a customer support chat operator. Your goal is to provide helpful and informative responses to customer inquiries. Give a response to the next user's query, considering the entire conversation context, and use grammar and vocabulary at the A2-B2 level. Answer in the format of simple sentences. Do not include question in answer. Please, provide answer for this issue:"${textToSend}"`;

      // eslint-disable-next-line no-return-await
      return await AISource.getDataWithProxyServer(
        prompt,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        context,
        servername,
        api,
        port,
        apiKeyOrSessionToken,
      ).then((data) => {
        setTextFromWidgetToContent(data);

        return data;
      });
    }

    return '';
  };

  return {
    textToContent: textFromWidgetToContent,
    renderWidget,
    textToWidget,
  };
}
